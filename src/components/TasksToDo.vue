<template>
    <div>
        <!--a v-for loop to loop through the tasks -->
      <div v-for="task in tasks" :key="task.id" class="task" :class="{ reminder: task.reminder }" @click="openTaskDetails(task)">
        <h3>
          {{ task.text }}
          <span style="cursor: pointer" @click.stop="toggleDone(task.id)" :class="{ done: task.done }">✔</span>
          <span style="cursor: pointer" @click.stop="deleteTask(task.id)" v-if="!disableDelete">❌</span>
        </h3>
        <p>{{ new Date(task.day).toLocaleString() }}</p>
        <p v-if="task.description && task.description.trim() !== ''" class="task-description">
          {{ task.description }}
        </p>
      </div>
  

      <!--check if task is selected-->
      <!--shows the modal -->
      <TaskDetail 
      v-if="selectedTask"  
        :task="selectedTask" 
        @close-modal="closeTaskDetails"
      />
    </div>
  </template>
  
  <script>
  import { ref } from "vue"; // the setState of vue
  import { useTaskStore } from "@/stores/taskStore"; 
  import TaskDetail from "./TaskDetail.vue";
  
  export default {
    name: "TasksToDo",
    components: { TaskDetail },
    props: {
      tasks: Array,
      disableDelete: Boolean,
    },
    setup() {
      const taskStore = useTaskStore(); 
  
      const deleteTask = (id) => {
        taskStore.deleteTask(id); 
      };
  
      const toggleDone = (id) => {
        taskStore.toggleDone(id); 
      };
  
      // Corrected variable name
      const selectedTask = ref(null);
  
      // Corrected function name
      const openTaskDetails = (task) => {
        selectedTask.value = task;
      };
  
      const closeTaskDetails = () => {
        selectedTask.value = null;
      };
  
      return {
        deleteTask,
        toggleDone,
        selectedTask,
        openTaskDetails, 
        closeTaskDetails,
      };
    }
  };
  </script>
  
  <style scoped>
  .done {
    text-decoration: line-through;
    color: gray;
  }
  
  .task {
    background: #ffffff;
    margin: 10px 0;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    cursor: pointer;
  }
  
  .task:hover {
    transform: translateY(-3px);
  }
  </style>
  