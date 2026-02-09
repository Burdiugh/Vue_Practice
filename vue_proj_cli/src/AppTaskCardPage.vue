<template>
  <div class="container">
    <div class="main-content">
      <div class="main-content-container">
        <div>
          <h2>{{ task.title }}</h2>
          <p>{{ task.description }}</p>
          <div>
            <button @click="changeStatus(task.id, 'in-progress')">
              To take
            </button>
            <button @click="changeStatus(task.id, 'completed')">
              To complete
            </button>
            <button @click="changeStatus(task.id, 'cancelled')">
              To cancel
            </button>
          </div>
        </div>
        <div>
          <app-status-tag :status="task.status"></app-status-tag>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import AppStatusTag from "./components/AppStatusTag.vue";
import { useTaskStore } from "./store/taskStore";

export default {
  props: ["id"],
  setup(props) {
    const taskStore = useTaskStore();
    const { changeStatus } = taskStore;

    const task = computed(() => {
      return taskStore.tasks.find((t) => String(t.id) === String(props.id));
    });

    return {
      task,
      changeStatus,
    };
  },
  components: { AppStatusTag },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin-top: 100px;
}
.main-content-container {
  padding: 16px 16px;
  display: flex;
  justify-content: space-between;
}
</style>
