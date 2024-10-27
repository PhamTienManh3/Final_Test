import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./Header";
import All from "./All";
import Active from "./Active";
import Completed from "./Completed";
import { FaRegTrashAlt } from "react-icons/fa";

const TodoApp = () => {
  const [todoArr, setTodoArr] = useState([]);
  const [todo, setTodo] = useState("");
  const [currentTab, setCurrentTab] = useState("All");

  const submitData = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      setTodoArr([...todoArr, { id: uuidv4(), title: todo, completed: false }]);
      setTodo("")};
  };

  const toggleTask = (todoId) => {
    const todoArr_new = [...todoArr];
    const ftodo = todoArr_new.find((td) => td.id === todoId);
    ftodo.complete = !ftodo.complete ? true : !ftodo.complete;
    setTodoArr([...todoArr_new]);
  };

  const toggleTaskCompletion = (id) => {
    setTodoArr(
      todoArr.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTasks = () => {
    if (currentTab === "Active") {
      return todoArr.filter((todo) => !todo.completed);
    } else if (currentTab === "Completed") {
      return todoArr.filter((todo) => todo.completed);
    }
    return todoArr;
  };

  const removeTask = (todoId) => {
    setTodoArr(todoArr.filter((td) => td.id !== todoId));
  };

  const deleteAllCompletedTasks = () => {
   setTodoArr(todoArr.filter(todo => !todo.completed));
 };

  return (
    <div className="todo-app">
      <h1>#todo</h1>
      <Header setCurrentTab={setCurrentTab} currentTab={currentTab} />

      {currentTab !== 'Completed' && (
        <form className="add-task-form" onSubmit={submitData}>
          <input 
            type="text" 
            placeholder="add details" 
            value={todo} 
            onChange={e => setTodo(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
      )}

      {currentTab === "All" && (
        <All
          todoArr={todoArr}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      )}

      {currentTab === "Active" && (
        <Active
          todo={todo}
          setTodo={setTodo}
          todoArr={filteredTasks()}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      )}

      {currentTab === "Completed" && (
        <Completed todoArr={filteredTasks()} removeTask={removeTask} />
      )}

      {currentTab === "Completed" && todoArr.some((todo) => todo.completed) && (
        <div className="d-flex justify-content-end"> 
          <button onClick={deleteAllCompletedTasks} className="delete-all-button">
          <FaRegTrashAlt/>
          Delete all
        </button>
        </div>
      )}
    </div>
  );
};

export default TodoApp;
