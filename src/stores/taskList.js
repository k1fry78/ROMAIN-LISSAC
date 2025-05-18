import {ref} from 'vue';
import { defineStore } from 'pinia';

export const tasksListStore = defineStore('taskListStore', () => {
    let tasksListStore = ref([]);
})