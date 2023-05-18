import AddTask from "./AddTask.js";
import TaskList from "./TaskList.js";
import { TasksContext } from "./TasksContext";

export default function TaskApp() {
  return (
    <TasksContext.Provider>
      <h1>布拉格的行程安排</h1>
      <AddTask />
      <TaskList />
    </TasksContext.Provider>
  );
}
