import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            { 
                id: 1, 
                text: 'Doctors Appointment', 
                day: '2024-03-21T14:30', 
                description: 'General Check up with Dr. Antonova.', // Added description
                reminder: true, 
                done: false 
            },
            { 
                id: 2, 
                text: 'Meeting at School', 
                day: '2024-03-22T13:30', 
                description: 'Discuss school project and progress.', // Added description
                reminder: true, 
                done: false 
            },
            { 
                id: 3, 
                text: 'Grocery Shopping', 
                day: '2024-03-22T11:00', 
                description: '', // Optional: Empty description if not needed
                reminder: false, 
                done: true 
            }
        ],
        showAddTask: false,
        filterType: 'all' // Can be 'all', 'ongoing', or 'completed'
    }),
    
    getters: {
        // Get sorted tasks based on the filter
        sortedTasks: (state) => {
            if (state.filterType === 'ongoing') {
                return [...state.tasks]
                    .filter(task => !task.done) // Show only ongoing tasks
                    .sort((a, b) => new Date(a.day) - new Date(b.day)); // Sort by date
            } else if (state.filterType === 'completed') {
                return [...state.tasks]
                    .filter(task => task.done) // Show only completed tasks
                    .sort((a, b) => new Date(a.day) - new Date(b.day)); // Sort by date
            } else {
                return [...state.tasks]
                    .sort((a, b) => new Date(a.day) - new Date(b.day)); // Show all tasks sorted by date
            }
        },
        completedTasks: (state) => state.tasks.filter(task => task.done)
    },
actions: {
        addTask(task) {
            this.tasks.push(task);
        },
        deleteTask(id) {
            this.tasks = this.tasks.filter(task => task.id !== id);
        },
        toggleReminder(id) {
            const task = this.tasks.find(task => task.id === id);
            if (task) task.reminder = !task.reminder;
        },
        toggleDone(id) {
            const task = this.tasks.find(task => task.id === id);
            if (task) task.done = !task.done;
        },
        toggleAddTask() {
            this.showAddTask = !this.showAddTask;
        },
        setFilter(type) {
            this.filterType = type;
        }
    }
});
