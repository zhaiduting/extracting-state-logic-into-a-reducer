import AddTask from './AddTask.js';
import TaskList from './TaskList.js';
import {TaskContext} from "./taskContext";

export default function TaskApp() {
    return (
        <TaskContext.Provider>
            <h1>布拉格的行程安排</h1>
            <AddTask/>
            <TaskList/>
        </TaskContext.Provider>
    );
}
