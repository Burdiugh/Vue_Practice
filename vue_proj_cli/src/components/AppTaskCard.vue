import defineProps from ''

<template>
  <router-link :to="{ name: 'task-card', params: { id: id } }">
    <div class="main-content">
      <div class="main-content-container">
        <div>
          <h2>{{ title }}</h2>
          <p>{{ desc }}</p>
        </div>
        <div>
          <app-status-tag :status="status"></app-status-tag>
          <button class="button danger">Remove</button>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import AppStatusTag from "./AppStatusTag.vue";

export default {
  props: ["task"],
  setup(props) {
    return {
      id: props.task.id,
      title: props.task.title,
      desc: props.task.description,
      status: props.task.status,
    };
  },
  components: { AppStatusTag },
};
</script>

<style scoped>
.main-content-container {
  padding: 16px 16px;
  display: flex;
  justify-content: space-between;
}
</style>
