import React, { useState, useEffect, useRef } from "react";
import { useTodo } from "../contexts";
import { Pencil, Save, Trash2 } from "lucide-react";

function TodoItem({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();
  const inputRef = useRef(null);

  useEffect(() => {
    setTodoMsg(todo.todo);
  }, [todo.todo]);

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
    }
  }, [isEditing]);

  const saveEdit = () => {
    if (todoMsg.trim()) {
      updateTodo(todo.id, { todo: todoMsg.trim() });
      setIsEditing(false);
    }
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex flex-wrap items-center gap-3 p-4 rounded-xl shadow-sm transition-all duration-300 w-full max-w-md
        ${todo.completed ? "bg-green-100" : "bg-purple-100"}`}
    >
      {/* Checkbox */}
      <input
        type="checkbox"
        className="h-5 w-5 accent-green-500 cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompleted}
        aria-label={todo.completed ? "Mark as incomplete" : "Mark as complete"}
      />

      {/* Editable Text Input */}
      <input
        ref={inputRef}
        type="text"
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isEditing}
        className={`flex-grow min-w-0 bg-transparent outline-none text-base rounded-md transition duration-200
          ${
            isEditing
              ? "border border-gray-300 px-2 py-1"
              : "border-transparent cursor-pointer select-none"
          } ${todo.completed ? "line-through text-gray-500" : "text-gray-900"}`}
        aria-label="Todo text"
        onKeyDown={(e) => {
          if (e.key === "Enter" && isEditing) {
            e.preventDefault();
            saveEdit();
          }
          if (e.key === "Escape" && isEditing) {
            setIsEditing(false);
            setTodoMsg(todo.todo); // revert changes on Escape
          }
        }}
        onDoubleClick={() => {
          if (!todo.completed) setIsEditing(true);
        }}
      />

      {/* Edit / Save Button */}
      <button
        onClick={() => {
          if (todo.completed) return;
          if (isEditing) {
            saveEdit();
          } else {
            setIsEditing(true);
          }
        }}
        disabled={todo.completed}
        title={isEditing ? "Save Todo" : "Edit Todo"}
        className={`w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-lg border transition
          ${
            todo.completed
              ? "bg-gray-200 border-gray-300 cursor-not-allowed opacity-50"
              : "bg-white border-gray-300 hover:bg-gray-100 cursor-pointer"
          }`}
        aria-disabled={todo.completed}
      >
        {isEditing ? (
          <Save size={18} strokeWidth={2} />
        ) : (
          <Pencil size={18} strokeWidth={2} />
        )}
      </button>

      {/* Delete Button */}
      <button
        onClick={() => deleteTodo(todo.id)}
        title="Delete Todo"
        className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-lg bg-white border border-gray-300 text-red-600 hover:bg-red-100 transition cursor-pointer p-2"
      >
        <Trash2 size={18} strokeWidth={2} />
      </button>
    </div>
  );
}

export default TodoItem;
