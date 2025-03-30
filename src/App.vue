<template>
  <div class="container">
    <AppHeader @toggle-add-task="taskStore.toggleAddTask" :showAddTask="taskStore.showAddTask" />

    <div v-show="taskStore.showAddTask">
      <AddTask @add-task="taskStore.addTask" />
    </div>

    <!-- Filter Buttons -->
    <div class="filter-buttons">
      <button @click="taskStore.setFilter('all')" :class="{ active: taskStore.filterType === 'all' }">Show All</button>
      <button @click="taskStore.setFilter('ongoing')" :class="{ active: taskStore.filterType === 'ongoing' }">Show Ongoing</button>
      <button @click="taskStore.setFilter('completed')" :class="{ active: taskStore.filterType === 'completed' }">Show Completed</button>
    </div>


    <TasksToDo
      @toggle-reminder="taskStore.toggleReminder"
      @delete-task="taskStore.deleteTask"
      @toggle-done="taskStore.toggleDone"
      :tasks="taskStore.sortedTasks"
    />


  </div>
</template>

<script>
import { useTaskStore } from './stores/taskStore.js';
import AddTask from './components/AddTask.vue';
import AppHeader from './components/AppHeader.vue';
import TasksToDo from './components/TasksToDo.vue';
import './App.css';


export default {
  name: 'App',
  components: { AppHeader, TasksToDo, AddTask },
  setup() {
    const taskStore = useTaskStore();
    return { taskStore };
  }
};
</script>

<style scoped>
.container {
  max-width: 500px;
  margin: 30px auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.filter-buttons {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.filter-buttons button {
  padding: 12px 18px;
  border: 2px solid #f06d92; /* Pink border */
  background-color: transparent;
  color: #f06d92;
  border-radius: 8px;
  font-weight: bold;
}

.filter-buttons button:hover {
  background-color: #f06d92;
  color: white;
}

.filter-buttons .active {
  background-color: #f06d92;
  color: white;
  border: 2px solid transparent;
}

</style>
