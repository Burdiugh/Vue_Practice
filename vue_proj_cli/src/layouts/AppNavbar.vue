<template>
  <div class="navbar">
    <ul>
      <li><RouterLink :to="{ name: 'home' }">Home</RouterLink></li>
      <li><RouterLink :to="{ name: 'tasks-page' }">All tasks</RouterLink></li>
      <li><RouterLink :to="{ name: 'task-create' }">Create</RouterLink></li>
    </ul>
  </div>
</template>

<script>
export default {
  setup() {
    //
    return {
      //
    };
  },
};
</script>

<style></style>
