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
            return [...tasks, {...action.task, id: ++nextId}]
        }
        case 'updateTask': {
            return tasks.map((task) => {
                return task.id === action.task.id
                    ? action.task
                    : task
            })
        }
        case 'deleteTask': {
            return tasks.filter(task => task.id !== action.task.id)
        }
    }
}
