import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";

const Completed = ({todoArr, removeTask}) => {
  return (
    <div className="task-list">
      {todoArr.map((todo) => (
      <div key={todo.id} className="task-list-item completed2">
          <div>
          <input 
            type="checkbox" 
            checked={todo.completed} 
            readOnly
          />
          <label>{todo.title}</label>
          </div>
          <FaRegTrashAlt onClick={() => removeTask(todo.id)}/>
        </div>
      ))}
    </div>
  )
}

export default Completed
 