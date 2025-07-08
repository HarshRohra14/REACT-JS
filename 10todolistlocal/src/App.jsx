import { useEffect, useState } from "react";
import { TodoProvider } from "./contexts";
import { TodoForm, TodoItem } from "./components";
import { Moon, Sun, Search } from "lucide-react";

function App() {
  const [todos, setTodos] = useState([]);
  const [theme, setTheme] = useState("dark");
  const [search, setSearch] = useState("");

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, updatedFields) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, ...updatedFields } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("todos"));
      if (Array.isArray(stored)) setTodos(stored);
    } catch (err) {
      console.error("Invalid todos in localStorage:", err);
    }
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const filteredTodos = todos
    .filter((todo) => todo.todo.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => a.completed - b.completed);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-900 py-12 px-4 sm:px-6 text-white dark:text-white">
        <main className="max-w-4xl mx-auto bg-white/10 dark:bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl p-6 sm:p-10 lg:p-12">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-indigo-300 drop-shadow-sm tracking-tight">
              📝 Manage Your Todos
            </h1>
            <button
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Search */}
          <div className="mb-6 flex items-center gap-3 bg-white/10 px-4 py-2 rounded-xl shadow-inner">
            <Search size={18} className="text-indigo-200" />
            <input
              type="text"
              placeholder="Search todos..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent outline-none text-white w-full placeholder-indigo-300"
            />
          </div>

          {/* Form */}
          <section className="mb-10 border-b border-indigo-300/30 pb-8">
            <TodoForm />
          </section>

          {/* Todos List */}
          <section>
            {filteredTodos.length > 0 ? (
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {filteredTodos.map((todo) => (
                  <li
                    key={todo.id}
                    className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-md hover:shadow-indigo-300 transition-shadow duration-300"
                  >
                    <TodoItem todo={todo} />
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-indigo-300 text-lg font-medium mt-6">
                No matching todos found.
              </p>
            )}
          </section>
        </main>
      </div>
    </TodoProvider>
  );
}

export default App;