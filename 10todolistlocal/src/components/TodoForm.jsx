import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";
import { Plus, AlertCircle } from "lucide-react";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const [error, setError] = useState(false);
  const { addTodo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo.trim()) {
      setError(true);
      setTimeout(() => setError(false), 1500);
      return;
    }
    addTodo({ todo: todo.trim(), completed: false });
    setTodo("");
    setError(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`relative flex items-center max-w-full rounded-2xl overflow-hidden shadow-lg transition-all duration-300 backdrop-blur-md border 
        ${error ? "border-red-400 bg-red-100/20 dark:bg-red-400/10" : "border-white/20 bg-white/20 dark:bg-white/10"}
      `}
      aria-label="Add new todo"
    >
      {/* Input Field */}
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="What's on your mind?"
        className={`flex-grow px-5 py-3 text-base font-medium bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 outline-none transition-all duration-300 
          ${error ? "placeholder-red-400 dark:placeholder-red-300" : ""}
        `}
        aria-invalid={error}
        aria-describedby={error ? "error-msg" : undefined}
      />

      {/* Add Button */}
      <button
        type="submit"
        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold transition duration-300 rounded-r-2xl select-none shadow-md focus:outline-none focus:ring-2 focus:ring-green-400"
        aria-label="Add todo"
      >
        <Plus size={20} strokeWidth={2.5} />
        Add
      </button>

      {/* Error Message */}
      {error && (
        <div
          id="error-msg"
          className="absolute left-4 -bottom-6 flex items-center gap-1 text-sm text-red-600 dark:text-red-400 animate-pulse"
        >
          <AlertCircle size={16} />
          Please enter a todo
        </div>
      )}
    </form>
  );
}

export default TodoForm;
