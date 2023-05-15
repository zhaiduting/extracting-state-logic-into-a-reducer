// import { useState } from 'react';
import { useImmerReducer } from "use-immer";
import taskReducer from "./tasksReducer";
import AddTask from "./AddTask.js";
import TaskList from "./TaskList.js";

export default function TaskApp() {
  // const [tasks, setTasks] = useState(initialTasks);
  const [tasks, dispatch] = useImmerReducer(taskReducer, initialTasks);

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

  return (
    <>
      <h1>布拉格的行程安排</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: "参观卡夫卡博物馆", done: true },
  { id: 1, text: "看木偶戏", done: false },
  { id: 2, text: "打卡列侬墙", done: false },
];
