import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice' 

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

return (
    <form
        onSubmit={addTodoHandler}
        className="flex flex-col sm:flex-row items-center gap-4 bg-gray-900 p-6 rounded-lg shadow-lg mt-12 max-w-xl mx-auto"
    >
        <input
            type="text"
            className="flex-1 bg-gray-800 rounded-md border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-3 px-4 transition-colors duration-200 ease-in-out placeholder-gray-400"
            placeholder="What needs to be done?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoFocus
        />
        <button
            type="submit"
            className="w-full sm:w-auto text-white bg-gradient-to-r from-indigo-500 to-purple-600 border-0 py-3 px-8 focus:outline-none hover:from-indigo-600 hover:to-purple-700 rounded-md text-lg font-semibold shadow-md transition-all duration-200"
            disabled={!input.trim()}
        >
            <span className="inline-flex items-center gap-2">
                <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                Add Todo
            </span>
        </button>
    </form>
)
}

export default AddTodo