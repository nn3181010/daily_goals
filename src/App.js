import React, {useState} from 'react'
import {FaTrash, FaEdit} from 'react-icons/fa'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [taskCounter, setTaskCounter] = useState(0)

  const handleChange = event => {
    setInputValue(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (!inputValue.trim()) return // Prevent empty todos
    setTodos([...todos, inputValue])
    setInputValue('')
    updateTaskCounter()
  }

  const handleDelete = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
    updateTaskCounter()
  }

  const updateTaskCounter = () => {
    setTaskCounter(todos.length)
  }

  return (
    <div className="todo-list-container">
      <h1>Daily Goal!</h1>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Add a todo"
        />
        <button type="submit">Add Todo</button>
      </form>
      <div className="task-counter ">Total Tasks: {taskCounter}</div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <span>{todo}</span>
             <button>
              <FaEdit /> {/* Edit Icon */}
            </button>
            <button onClick={() => handleDelete(index)}>
              <FaTrash />
            </button>
           
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
