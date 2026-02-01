<template>
  <div>
    <textarea
      class="default-text-input"
      type="text"
      id="modelValue"
      :value="modelValue"
      :placeholder="placeholder"
      @input="onInput"
    />
  </div>
</template>

<script>
export default {
  props: ["modelValue", "placeholder"],
  emits: ["update:modelValue"],
  data() {
    return {};
  },
  methods: {
    onInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
.default-text-input {
  width: 100%;
  height: 120px;
  padding: 3px;
  border: 1px solid #ccc;
  border-radius: 6px;
  resize: none;
  font-size: 16px;
  line-height: 1.4;
}
</style>
