export default function tasksReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      tasks.push({
        id: action.id,
        text: action.text,
        done: false,
      });
      return;
    }
    case "deleted": {
      let i = tasks.findIndex((t) => t.id === action.id);
      if (i > -1) tasks.splice(i, 1); // 比 filter() 高效
      return;
    }
    case "updated": {
      let i = tasks.findIndex((t) => t.id === action.task.id);
      if (i > -1) tasks[i] = action.task;
      return;
    }
  }
}
