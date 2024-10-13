let nextId = 3

/*
 * tasks: [..]
 * action: {
 *  type: addTask|updateTask|deleteTask,
 *  task: {id?}
 * }
 */
export function taskReducer(tasks, action) {
    switch (action.type) {
        case 'addTask': {
            tasks.push({...action.task, id: ++nextId})
            return
        }
        case 'updateTask': {
            let index = tasks.findIndex((task) => task.id === action.task.id)
            if (index >= 0) tasks[index] = action.task
            return
        }
        case 'deleteTask': {
            let index = tasks.findIndex((task) => task.id === action.task.id)
            if (index > -1) tasks.splice(index, 1)
            return
        }
    }
}
