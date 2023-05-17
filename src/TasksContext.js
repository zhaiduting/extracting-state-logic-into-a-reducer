import { createContext } from "react";
import { useImmerReducer } from "use-immer";
import { tasksReducer } from "./tasksReducer";

let nextId = 3;
const initialTasks = [
  { id: 0, text: "参观卡夫卡博物馆", done: true },
  { id: 1, text: "看木偶戏", done: false },
  { id: 2, text: "打卡列侬墙", done: false },
];

export const TasksContext = createContext(null);
TasksContext._Provider = TasksContext.Provider;
TasksContext.Provider = function ({ children }) {
  const [tasks, dispatch] = useImmerReducer(tasksReducer, initialTasks);
  function handleAddTask(text) {
    dispatch({ type: "added", id: nextId++, text: text, done: false });
  }

  function handleChangeTask(task) {
    dispatch({
      type: "updated",
      task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({ type: "deleted", id: taskId });
  }
  const props = {
    tasks,
    handleDeleteTask,
    handleChangeTask,
    handleAddTask,
  };
  return (
    <TasksContext._Provider value={props}>{children}</TasksContext._Provider>
  );
};
