const TodoForm = (props) => {
    const {setTodoList} = props;
    const onSubmit = (e) => {
        e.preventDefault();        
        const todoText = e.target.todoInput.value;
        setTodoList((prevState)=> {
            const newTodoItem = {
                title: todoText,
                id: Math.random(),
            } 
            
            return [...prevState, newTodoItem];
        })
    }
  return (
    <form className="todo-form" onSubmit={onSubmit}>
      <input className="todo-input" type="text" name="todoInput" placeholder="Enter your task"/>
      <button className="todo-add-button">Add todo</button>
    </form>
  );
};
export default TodoForm;
