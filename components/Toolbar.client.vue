<script setup>

const { tasksCount, tasksDoneCount, deleteTasks } = useTodo();

</script>
<template>
    <v-toolbar>
        <v-spacer></v-spacer>
        <v-chip class="bg-indigo-darken-4 pe-0 rounded-pill mx-4 d-flex justify-space-between">
            <p>Tasks </p> <span class="rounded-circle px-3 py-1 bg-white ms-2"> {{ tasksCount }}</span>
        </v-chip>
        <v-chip class="bg-indigo-darken-4 pe-0 rounded-pill mx-4 d-flex justify-space-between">
            <p>Tasks Done</p> <span class="rounded-circle px-3 py-1 bg-white ms-2"> {{ tasksDoneCount }}</span>
        </v-chip>
        <v-btn class="bg-red mx-2" v-if="tasksDoneCount > 0" @click="deleteTasks(true)">
            <v-icon>mdi-delete</v-icon>
            <p>Tasks Done</p>
        </v-btn>
        <v-btn class="bg-red" @click="deleteTasks(false)">
            <v-icon>mdi-delete</v-icon>
            <p>Tasks</p>
        </v-btn>
    </v-toolbar>
</template>