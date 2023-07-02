<script setup>

const task = ref({
    id: 0,
    name: '',
    status: {
        done: false
    }
})
const input = ref(null)
const { storeTodo } = useTodo();

const addTodo = () => {
    if (!task.value.name) return input.value.focus();

    storeTodo(task.value)
    task.value = {
        ...task.value,
        id: Math.floor(100000 + Math.random() * 900000),
        name: ''
    }
}

</script>
<template>
    <div class="d-flex justify-center align-center px-3">
        <v-text-field ref="input" v-model="task.name" placeholder="Todo" variant="solo" class="rounded-pill"></v-text-field>
        <v-btn class="mx-2 mb-6 text-blue" icon variant="outlined" v-on:click="addTodo()">
            <v-icon>mdi-plus</v-icon>
        </v-btn>
    </div>
</template>