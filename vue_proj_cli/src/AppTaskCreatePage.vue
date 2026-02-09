<template>
  <div class="container">
    <div>
      <div class="form-control">
        <form @submit.prevent="handleSubmit">
          <div>
            <label for="title"></label>
            <input type="text" v-model.trim="formData.title" />
          </div>
          <label for="description"></label>
          <input type="text" v-model.trim="formData.description" />

          <button type="submit"></button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { useTaskStore } from "./store/taskStore";
import { ref } from "vue";

export default {
  setup() {
    const taskStore = useTaskStore();
    const formData = ref({
      title: "",
      description: "",
      status: "completed",
    });

    const handleSubmit = () => {
      taskStore.addTask(formData.value);
      formData.value = {
        title: "",
        description: "",
        status: "completed",
      };
    };
    return {
      handleSubmit,
      formData,
    };
  },
};
</script>

<style scoped></style>
