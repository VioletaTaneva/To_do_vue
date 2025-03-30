<template>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Task</label>
      <input type="text" v-model="text" placeholder="Add Task" required />
    </div>

    <div class="form-control">
      <label>Day & Time</label>
      <VueDatePicker class="task-description" v-model="day" :enable-time-picker="true" required />
    </div>
    
    <div class="form-control">
      <label>Description</label>
      <textarea class="task-description" v-model="description" placeholder="Add task description (optional)"></textarea>
    </div>

    <div class="form-control form-control-check">
  <label for="reminder" class="reminder-label">Set Reminder</label>
  <input type="checkbox" id="reminder" v-model="reminder" class="reminder-checkbox" />
</div>

    <input type="submit" value="Save Task" class="submit-btn" />
  </form>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

export default {
  name: "AddTask",
  components: { VueDatePicker },
  data() {
    return { 
      text: "", 
      day: "", 
      reminder: false,
      description: ""  
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      
      this.$emit("add-task", {
        id: Date.now(),
        text: this.text.trim(),
        day: this.day,
        reminder: this.reminder,
        description: this.description.trim(),
        done: false
      });

      // Reset fields after submit
      this.text = "";
      this.day = "";
      this.reminder = false;
      this.description = ""; 
    }
  }
};
</script>

<style scoped>
.add-form {
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
  margin-top: 20px;
}

.form-control {
  margin-bottom: 15px;
}

.form-control label {
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
  color: #333;
}

.form-control input[type="text"],
.form-control input[type="submit"] {
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 2px solid #f06d92;
  font-size: 16px;
  margin-top: 5px;
}

.form-control input[type="text"] {
  background-color: #f9f9f9;
}

.form-control input[type="submit"] {
  background-color: #f06d92;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
}

.form-control input[type="submit"]:hover {
  background-color: #ff4081;
}

.task-description {
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 2px solid #f06d92;
  font-size: 16px;
  margin-top: 5px;
  background-color: #f9f9f9;
}

.submit-btn {
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 2px solid #f06d92;
  background-color: #f06d92;
  color: white;
  font-weight: bold;
  cursor: pointer;
  margin-top: 15px;
}

</style>