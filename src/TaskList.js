import {useContext, useReducer, useState} from 'react';
import {TaskContext} from "./taskContext";

export default function TaskList() {
    const {tasks} = useContext(TaskContext);
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    <Task task={task}/>
                </li>
            ))}
        </ul>
    );
}

function Task({task}) {
    const {handleUpdateTask, handleDeleteTask} = useContext(TaskContext);
    const [isEditing, setIsEditing] = useState(false);
    let taskContent;
    if (isEditing) {
        taskContent = (
            <>
                <input
                    value={task.text}
                    onChange={(e) => {
                        handleUpdateTask({
                            ...task,
                            text: e.target.value,
                        });
                    }}
                />
                <button onClick={() => setIsEditing(false)}>保存</button>
            </>
        );
    } else {
        taskContent = (
            <>
                {task.text}
                <button onClick={() => setIsEditing(true)}>编辑</button>
            </>
        );
    }
    return (
        <label>
            <input
                type="checkbox"
                checked={task.done}
                onChange={(e) => {
                    handleUpdateTask({
                        ...task,
                        done: e.target.checked,
                    });
                }}
            />
            {taskContent}
            <button onClick={() => handleDeleteTask(task)}>删除</button>
        </label>
    );
}
