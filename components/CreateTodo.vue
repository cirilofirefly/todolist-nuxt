<script setup>

const task = ref({
    id: 0,
    name: '',
    done: false
})
const input = ref(null)
const { storeTodo } = useTodo();

const addTodo = () => {
    if (!task.value) return input.value.focus();

    storeTodo(task.value)
    task.value = {
        ...task.value,
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