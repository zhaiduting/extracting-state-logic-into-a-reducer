import { useState } from "react";
import { useContext } from "react";
import { TasksContext } from "./TasksContext";
export default function AddTask() {
  const [text, setText] = useState("");
  const handleAddTask = useContext(TasksContext).handleAddTask;
  return (
    <>
      <input
        placeholder="添加任务"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          handleAddTask(text);
        }}
      >
        添加
      </button>
    </>
  );
}
