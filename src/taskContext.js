import {createContext} from "react";
import {useImmer} from "use-immer";

let nextId = 3
const initialTasks = [
    {id: 0, text: '参观卡夫卡博物馆', done: true},
    {id: 1, text: '看木偶戏', done: false},
    {id: 2, text: '打卡列侬墙', done: false},
];

export const TaskContext = createContext();
const Provider = TaskContext.Provider

TaskContext.Provider = function ({children}) {
    const [tasks, setTasks] = useImmer(initialTasks)

    return <Provider value={
        {
            tasks,
            handleAddTask(task) {
                setTasks(drafts => {
                    drafts.push({...task, id: nextId++})
                });
            },
            handleUpdateTask(task) {
                setTasks(drafts => {
                    const index = drafts.findIndex((draft) => draft.id === task.id)
                    drafts[index] = task
                })
            },
            handleDeleteTask(task) {
                setTasks(drafts => {
                    const index = drafts.findIndex((draft) => draft.id === task.id)
                    drafts.splice(index, 1)
                })
            }
        }
    }>{children}</Provider>;
}
