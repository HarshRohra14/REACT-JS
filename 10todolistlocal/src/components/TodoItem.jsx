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
    if (isEditing) inputRef.current?.focus();
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
      className={`flex flex-wrap items-center justify-between gap-4 px-4 py-3 rounded-2xl w-full max-w-xl shadow-lg transition-all duration-300 backdrop-blur-md border 
      ${
        todo.completed
          ? "bg-green-200/20 border-green-300"
          : "bg-purple-200/20 border-purple-300"
      }`}
    >
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={toggleCompleted}
        className="h-5 w-5 accent-green-500 cursor-pointer transition-transform hover:scale-110"
        title={todo.completed ? "Mark as incomplete" : "Mark as complete"}
      />

      {/* Editable Text Input */}
      <input
        ref={inputRef}
        type="text"
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isEditing}
        placeholder="Write your task..."
        className={`flex-grow min-w-0 text-lg font-medium bg-transparent outline-none transition duration-200 rounded-md px-2 py-1
          ${
            isEditing
              ? "border border-gray-300 bg-white shadow-sm"
              : "border border-transparent cursor-pointer"
          } ${todo.completed ? "line-through text-gray-500" : "text-gray-800"}`}
        onKeyDown={(e) => {
          if (e.key === "Enter" && isEditing) {
            e.preventDefault();
            saveEdit();
          }
          if (e.key === "Escape" && isEditing) {
            setIsEditing(false);
            setTodoMsg(todo.todo);
          }
        }}
        onDoubleClick={() => !todo.completed && setIsEditing(true)}
      />

      {/* Action Buttons */}
      <div className="flex gap-2">
        {/* Edit / Save */}
        <button
          onClick={() => {
            if (todo.completed) return;
            isEditing ? saveEdit() : setIsEditing(true);
          }}
          disabled={todo.completed}
          title={isEditing ? "Save" : "Edit"}
          className={`w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-full border shadow-sm transition-all duration-200
            ${
              todo.completed
                ? "bg-gray-200 border-gray-300 cursor-not-allowed opacity-50"
                : "bg-white border-gray-300 hover:bg-purple-100 hover:shadow-md cursor-pointer"
            }`}
        >
          <div
            className={`transition-transform duration-300 ease-in-out ${
              isEditing ? "rotate-180" : "rotate-0"
            }`}
          >
            {isEditing ? (
              <Save size={18} strokeWidth={2} className="text-purple-800" />
            ) : (
              <Pencil size={18} strokeWidth={2} className="text-purple-800" />
            )}
          </div>
        </button>

        {/* Delete */}
        <button
          onClick={() => deleteTodo(todo.id)}
          title="Delete"
          className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-full border border-red-300 bg-white text-red-500 hover:bg-red-100 hover:shadow-md transition-all duration-200 cursor-pointer shadow-sm"
        >
          <Trash2 size={18} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
