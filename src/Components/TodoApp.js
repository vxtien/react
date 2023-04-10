import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoListContainer from "./TodoListContainer";
import "./todo-app.css"

const TodoApp = () => {
    const [todoList, setTodoList] = useState([]);
    console.log(todoList);

  return (
    <div className="todo-app-wrapper">
      <h1 className="todo-app-title">Todo App</h1>
      <TodoForm setTodoList={setTodoList}/>
      <TodoListContainer tasks={todoList}/>

        <div className="clear-all-items">
            <p>You have 4 pending task</p>
            <button>Clear all</button>
        </div>

    </div>
  );
};

export default TodoApp;