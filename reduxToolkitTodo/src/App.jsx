import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
// Make sure AddTodo.jsx and Todos.jsx exist in ./components and use `export default`

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-900 to-purple-900 flex flex-col items-center justify-center p-8">
      <div className="bg-gray-900 rounded-2xl shadow-2xl p-10 w-full max-w-lg">
        <div className="flex items-center gap-3 mb-8">
          <img src={viteLogo} alt="Vite Logo" className="h-8 w-8 animate-bounce" />
          <h1 className="text-4xl font-extrabold text-white tracking-tight">ToDo App</h1>
        </div>
        <AddTodo />
        <div className="mt-8">
          <Todos />
        </div>
      </div>
      <footer className="mt-10 text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} Redux Toolkit ToDo
      </footer>
    </div>
  )
}

export default App
