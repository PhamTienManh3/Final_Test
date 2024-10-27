import React from 'react'

const All = ({ todoArr, toggleTaskCompletion }) => {
  return (
    <div className='task-list'>
      {todoArr.map((todo) => (
        <div
          key={todo.id} 
          className={`task-list-item ${todo.completed ? 'completed' : ''}`}
        >
          <input 
            type="checkbox" 
            checked={todo.completed} 
            onChange={() => toggleTaskCompletion(todo.id)}
          />
          <label>{todo.title}</label>
        </div>
      ))}
    </div>
  )
}

export default All
