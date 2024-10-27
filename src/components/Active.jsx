import React from 'react'

const Active = ({todoArr, toggleTaskCompletion}) => {
  return (
      <div className="task-list">
      {todoArr.map((todo) => (
        <div key={todo.id} className={`task-list-item ${todo.completed ? 'completed' : ''}`}>
          <input 
            type="checkbox" 
            checked={todo.completed} 
            onChange={() => toggleTaskCompletion(todo.id)}
          />
          <span>{todo.title}</span>
        </div>
      ))}
    </div>
  )
}

export default Active
