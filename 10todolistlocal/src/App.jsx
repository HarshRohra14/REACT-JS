import { useEffect, useState } from "react";
import { TodoProvider } from "./contexts";
import { TodoForm, TodoItem } from "./components";

function App() {
  const [todos, setTodos] = useState([]);

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
    const stored = JSON.parse(localStorage.getItem("todos"));
    if (stored && stored.length) {
      setTodos(stored);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 py-12 px-6">
        <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-10 text-gray-900 dark:text-gray-100">
          <h1 className="text-4xl font-extrabold text-center mb-10 select-none text-indigo-700 dark:text-indigo-400">
            📝 Manage Your Todos
          </h1>

          <section className="mb-10 border-b border-indigo-200 dark:border-indigo-700 pb-8">
            <TodoForm />
          </section>

          <section>
            {todos.length > 0 ? (
              <div className="grid sm:grid-cols-2 gap-6">
                {todos.map((todo) => (
                  <div
                    key={todo.id}
                    className="bg-indigo-50 dark:bg-slate-700 rounded-2xl p-5 shadow-lg hover:shadow-indigo-400 transition-shadow duration-300"
                  >
                    <TodoItem todo={todo} />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-indigo-300 dark:text-indigo-600 text-lg font-semibold">
                No todos yet. Add one above!
              </p>
            )}
          </section>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
