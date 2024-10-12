import {useContext, useState} from "react";
import {TaskContext} from "./taskContext";

export default function AddTask({onAddTask}) {
    const {handleAddTask} = useContext(TaskContext)
    const [text, setText] = useState('');
    return (
        <>
            <input
                placeholder="添加任务"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                onClick={() => {
                    setText('');
                    handleAddTask({
                        text: text,
                    })
                }}>
                添加
            </button>
        </>
    );
}
