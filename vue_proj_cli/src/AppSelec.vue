<template>
  <select class="default-select" :value="modelValue" @change="onChange">
    <option v-for="option in options" :value="option" :key="option">
      {{ option }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
  },
  emits: ["update:modelValue"],
  data() {
    return {};
  },
  methods: {
    onChange(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
.default-select {
  width: 100%;
  font-size: 20px;
}
</style>
