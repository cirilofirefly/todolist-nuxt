<script setup>

defineProps({
    isHovering: Boolean,
    todo: Object
})

const { deleteTodo, markAsDone } = useTodo();

</script>
<template>
    <div class="d-flex justify-space-between align-center bg-grey-lighten-4 my-2 pa-4 cursor"
        :class="{ 'bg-grey-lighten-3': isHovering }">
        <div class="d-flex justify-center align-center">
            <v-btn size="small" icon :disabled="todo.done" :class="todo.done ? 'bg-grey' : 'bg-green'"
                @click="markAsDone(todo)">
                <v-icon>mdi-check</v-icon>
            </v-btn>
            <p class="mx-2 font-weight-bold" :class="{ 'text-decoration-line-through': todo.done }"> {{ todo.name }}</p>
        </div>
        <v-btn class="bg-red" v-if="isHovering" @click="deleteTodo(todo)" :disabled="todo.done">
            <v-icon>mdi-delete</v-icon>
        </v-btn>
    </div>
</template>
