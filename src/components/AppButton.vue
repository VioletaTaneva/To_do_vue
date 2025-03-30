<template>
    <button @click="onClick">{{ text }}</button>
</template>

<script>
export default {
    name: 'AppButton',
    // props are the vars you can change on the app.js 
    props: {
        text: String,
        color: String
    },
    methods: {
        onClick() {
            this.$emit('btn-click');
        }
    }
}
</script>

<style scoped>
.button {
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  background-color: #fff;
  color: #f06d92;
  border-radius: 8px;
  border: 2px solid #f06d92;
}

.button:hover {
  background-color: #f06d92;
  color: white;
  border-color: transparent;
}
</style>