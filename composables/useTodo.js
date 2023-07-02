export function useTodo() {

    const todos = useLocalStorage('todos', []);

    const storeTodo = (todo) => {
        todos.value.unshift(todo)
    }

    const deleteTodo = (todo) => {
        todos.value.splice(todos.value.indexOf(todo), 1);
    }

    const deleteTasks = (status) => {
        todos.value = status ? todos.value.filter(todo => !todo.status.done) : []
    }

    const markAsDone = (todo) => {
        todo.status.done = !todo.status.done
    }

    const tasksCount = computed(() => {
        return todos.value.length
    })

    const tasksDoneCount = computed(() => {
        return todos.value.filter((todo) => todo.status.done).length
    })

    return {
        deleteTasks,
        deleteTodo,
        markAsDone,
        tasksDoneCount,
        tasksCount,
        todos,
        storeTodo,
    }
}