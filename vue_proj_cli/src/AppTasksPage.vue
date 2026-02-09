<template>
  <div class="container">
    <div class="main-content">
      <div class="main-content-container">
        <div>
          <p>
            Total tasks: <strong>{{ allTasks }}</strong>
          </p>
          <p>
            Completed tasks: <strong>{{ completedTasks }}</strong>
          </p>
        </div>
      </div>
    </div>

    <div v-if="!isLoading">
      <app-task-card
        v-for="task in tasks"
        :key="task.id"
        :task="task"
      ></app-task-card>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import AppTaskCard from "./components/AppTaskCard.vue";
import { useTaskStore } from "./store/taskStore";
import { storeToRefs } from "pinia";

export default {
  setup() {
    const taskStore = useTaskStore();
    const { tasks, allTasks, completedTasks, isLoading } =
      storeToRefs(taskStore);

    onMounted(() => {
      taskStore.getList();
    });

    return {
      tasks,
      allTasks,
      completedTasks,
      isLoading,
    };
  },
  components: { AppTaskCard },
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
