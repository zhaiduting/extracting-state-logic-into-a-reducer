import {createContext, useReducer} from "react";
import {taskReducer} from "./taskReducer";

const initialTasks = [
    {id: 0, text: '参观卡夫卡博物馆', done: true},
    {id: 1, text: '看木偶戏', done: false},
    {id: 2, text: '打卡列侬墙', done: false},
];

export const TaskContext = createContext();
const _TaskContext = TaskContext.Provider

TaskContext.Provider = ({children}) => {
    const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

    return <_TaskContext value={
        {
            tasks,
            handleAddTask(task) {
                dispatch({type: 'addTask', task})
            },
            handleUpdateTask(task) {
                dispatch({type: 'updateTask', task})
            },
            handleDeleteTask(task) {
                dispatch({type: 'deleteTask', task})
            }
        }
    }>{children}</_TaskContext>;
}
