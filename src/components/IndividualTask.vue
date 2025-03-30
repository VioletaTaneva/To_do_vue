<template>
    <div @dblclick="$emit('toggle-reminder', task.id)" :class="[task.reminder ? 'reminder' : '', 'task']">
      <h3>
        {{ task.text }}
        <i @click="onDelete(task.id)" class="fas fa-times"></i>
      </h3>
      <p>{{ task.day }}</p>

      <!-- make sure description is shownn if sting is emty -->
      <p v-if="task.description && task.description.trim() !== ''" class="task-description">
        {{ task.description }}</p> 
            </div>
  </template>
  <script>
  
  export default {
    name: 'IndividualTask',
    props: {
      task: Object,
    },
    //methods are preset functions you can decide weatherto call or not. Like a var but its not data but an event
    methods: {
      onDelete(id) {
        this.$emit('delete-task', id)
      }
    }
  }
  </script>
  
  <style scope>
 .task {
  margin: 10px 0;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.task.reminder {
  border-left: 5px solid #ff4081; 
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  color: #333;
}

.task h3 i {
  color: #f06d92;
  cursor: pointer;
  font-size: 18px;
}

.task h3 i:hover {
  color: #ff4081;
}

.task p {
  color: #666;
  font-size: 14px;
}

.done {
  text-decoration: line-through;
  color: #aaa;
}
  </style>