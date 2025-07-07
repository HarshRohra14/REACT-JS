import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";
import { Plus } from "lucide-react";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo.trim()) return;
    addTodo({ todo: todo.trim(), completed: false });
    setTodo("");
  };

  return (
    <form
      onSubmit={add}
      className="flex items-center bg-white rounded-2xl shadow-md overflow-hidden max-w-full"
      aria-label="Add new todo"
    >
      <input
        type="text"
        placeholder="Write a new todo..."
        className="flex-grow px-5 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-opacity-50 transition duration-300"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        aria-label="Add todo"
        className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-6 py-3 rounded-r-2xl transition duration-300 select-none shadow-md"
      >
        <Plus size={20} strokeWidth={2.5} />
        Add
      </button>
    </form>
  );
}

export default TodoForm;
