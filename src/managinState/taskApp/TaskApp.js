import { useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
const initialTasks = [
    {id: 0, text: 'Visit Kafka Museum', done: true},
    {id: 1, text: 'Watch a puppet show', done: false},
    {id: 2, text: 'Lennon Wall pic', done: false},
];
const TaskApp = () => {
    const [tasks, setTasks] = useState(initialTasks);
    const total = tasks.length;

    const handleAddTask = (text) => {
        setTasks([
            ...tasks,
            {
                id: total,
                text: text,
                done: false
            }
        ])
    }
    const handleChangeTask = (task) => {
        setTasks(tasks.map((t) => {
            if (t.id === task.id) {
                return task;
            } else {
                return t;
            }
        }))
    }
    const handleDeleteTask = (taskId) => {
        setTasks(tasks.filter((t) => t.id !== taskId));
    }
    return(
        <>
            <h1>Prague itinerary</h1>
            <AddTask onAddTask={handleAddTask}/>
            <TaskList
                tasks={tasks}
                onChangeTask={handleChangeTask}
                onDeleteTask={handleDeleteTask}
            />
        </>
    )
}
export default TaskApp;