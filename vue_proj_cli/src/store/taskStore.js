import axios from "axios";
import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useTaskStore = defineStore("taskStore", () => {
  const DB_URL = "https://course-work-de16f-default-rtdb.firebaseio.com/tasks";
  const tasks = ref([]);
  const isLoading = ref(false);
  const allTasks = computed(() => tasks.value.length);
  const completedTasks = computed(
    () => tasks.value.filter((t) => t.status === "completed").length
  );

  function initList() {
    const inittasks = [
      {
        id: "0",
        title: "Learn Pinia",
        status: "completed",
        description: "You have to do sth1",
      },
      {
        id: "1",
        title: "Build Task App",
        status: "in-progress",
        description: "You have to do sth2",
      },
      {
        id: "2",
        title: "Master Vue 3",
        status: "cancelled",
        description: "You have to do sth3",
      },
    ];
    try {
      axios.put(
        "https://course-work-de16f-default-rtdb.firebaseio.com/tasks.json",
        inittasks
      );
    } catch (e) {
      console.error("Tasks init failed with: " + e);
    }
  }

  async function changeStatus(taskId, newStatus) {
    try {
      const task = tasks.value.find((t) => t.id === taskId);

      if (task) {
        task.status = newStatus;
      }

      await axios.patch(`${DB_URL}/${taskId}.json`, {
        status: newStatus,
      });
    } catch (e) {
      console.error("Failed to update status in DB:", e);
    }
  }

  async function addTask(task) {
    try {
      const { data } = await axios.post(`${DB_URL}.json`, task);
      const firebaseId = data.name;

      tasks.value.push({
        id: firebaseId,
        ...task,
      });
    } catch (e) {
      console.log("adding a task failed with: " + e);
    }
  }

  async function getList() {
    isLoading.value = true;
    try {
      const { data } = await axios.get(`${DB_URL}.json`);

      if (!data) {
        tasks.value = [];
        return;
      }

      tasks.value = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
    } catch (e) {
      console.error("Failed to fetch tasks:", e);
    } finally {
      isLoading.value = false;
    }
  }

  async function removeTask(id) {
    //
  }

  return {
    tasks,
    allTasks,
    completedTasks,
    initList,
    getList,
    changeStatus,
    addTask,
    removeTask,
  };
});
