import TodoItem from "./TodoItem";
const TodoListContainer = (props) => {
  const { tasks } = props;
  return (
    <div className="todo-container">
      {tasks.map((task) => (
        <TodoItem title={task.title} taskId={task.id}/>
      ))}
    </div>
  );
};
export default TodoListContainer;
