import {createContext} from "react";
import {taskReducer} from "./taskReducer";
import {useImmerReducer} from "use-immer";

const initialTasks = [
    {id: 0, text: '参观卡夫卡博物馆', done: true},
    {id: 1, text: '看木偶戏', done: false},
    {id: 2, text: '打卡列侬墙', done: false},
];

export const TaskContext = createContext();
const Provider = TaskContext.Provider

TaskContext.Provider = function ({children}) {
    const [tasks, dispatch] = useImmerReducer(taskReducer, initialTasks);

    return <Provider value={
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
    }>{children}</Provider>;
}
