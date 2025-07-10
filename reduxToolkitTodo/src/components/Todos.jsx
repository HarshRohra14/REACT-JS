import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';


function Todos() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    return (
        // Main container for the Todos component, centered with padding and rounded corners
        <div className="container mx-auto p-4 bg-gray-800 text-white rounded-lg shadow-xl max-w-md">
            {/* Heading for the Todos list */}
            <div className="flex flex-col items-center mb-8">
                <h2 className="text-3xl font-extrabold text-center text-blue-400 tracking-wide drop-shadow-lg flex items-center gap-2">
                    <span role="img" aria-label="Clipboard" className="text-4xl">📝</span>
                    Your Todos
                </h2>
                <div className="w-16 h-1 bg-blue-400 rounded mt-3"></div>
            </div>
            {/* Conditional rendering for when there are no todos */}
            {todos.length === 0 ? (
                <p className="text-center text-gray-400 text-lg">No todos yet!</p>
            ) : (
                // Unordered list to display the todos
                <ul className="space-y-4">
                    {/* Map through each todo item and render it */}
                    {todos.map((todo) => (
                        <li
                            key={todo.id}
                            className="flex items-center justify-between bg-gray-700 p-4 rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-[1.02] hover:bg-gray-600"
                        >
                            {/* Todo text */}
                            <span className="text-lg flex-grow mr-4 break-words">
                                {todo.text}
                            </span>

                            {/* Delete button for the todo item */}
                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75"
                                aria-label={`Remove todo: ${todo.text}`} // Accessibility improvement
                            >
                                X
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Todos;
