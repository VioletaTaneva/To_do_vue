<template>
    <div class="modal" v-if="task" @click.self="closeModal">
      <div class="modal-content">
        <h3>{{ task.text }}</h3>
        <p>{{ task.description }}</p>
        <p>Due: {{ new Date(task.day).toLocaleString() }}</p>
        <p> {{ task.done ? 'Completed' : 'Not Completed' }} </p>
        <button @click="closeModal">Close</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      task: Object,
    },
    methods: {
      closeModal() {
        this.$emit('close-modal');
      },
    },
  };
  </script>
  
  <style scoped>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  button {
    background-color: #f06d92;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #ff4081;
  }
  </style>
  