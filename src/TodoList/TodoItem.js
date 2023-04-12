const TodoItem = (props) => {
    const {title, taskId} = props;
    return(
        <div className="todo-item">
            <span>{title}</span>
            <button>X</button>
        </div>
    )
}
export default TodoItem;