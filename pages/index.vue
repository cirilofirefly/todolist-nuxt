<script setup>
const { todos } = useTodo();
useHead({
    title: 'Todo List'
})
</script>
<template>
    <v-container class="w-50 h-50">
        <h1 class="text-center my-4">Vue ToDo List</h1>
        <v-row align="center" no-gutters>
            <v-col align-self="center">
                <v-sheet class="pa-2 ma-2 rounded-lg">
                    <Toolbar />
                    <v-col class="todo-container">
                        <template v-for="(todo, index) in todos" open-delay="200">
                            <v-hover v-slot="{ isHovering, props }" :disabled="todo.done">
                                <Todo v-bind="props" :todo="todo" :isHovering="isHovering" :key="index" />
                            </v-hover>
                        </template>
                    </v-col>
                    <CreateTodo />
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>