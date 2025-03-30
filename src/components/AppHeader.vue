<template>
     <header class="header">
        <h1 class="title">{{ title }}</h1>
        <!-- $emit is an event maker -->
         <!-- @ = v-on = on this "comand/click" do soemtyhing aka an event listener-->
        <AppButton 
            @btn-click="$emit('toggle-add-task')"
            :text="showAddTask ? 'Close' : 'Add Task'"
            :color="showAddTask ? 'red' : 'green'" 
            class="button" />
    </header> 
</template>

<script>
import AppButton from './AppButton.vue';

export default {
    name: 'AppHeader',
    props: {
        title: {
            type: String,
            default: 'Task Tracker'
        },

        //needed to change the btn state form add to close
        showAddTask: {
             type: Boolean,
        }
    },
    
    components: {
        AppButton
    }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, #f06d92, #ff4081); /* Pink gradient */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 5px 0;
}

.title {
  font-size: 26px;
  font-weight: bold;
  color: white;
}
</style>