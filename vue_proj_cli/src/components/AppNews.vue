<template>
  <div class="container">
    <div class="card" v-for="item in news" :key="item.id">
      <h4>{{ item.title }}</h4>
      <button class="btn success" @click="toggle(item.id)">
        {{ openId === item.id ? "Hide" : "Show" }}
      </button>
      <div v-if="openId === item.id">
        <p>
          {{ item.info }}
        </p>
        <button class="btn" @click="read()">Read</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["news"],
  emits: ["open-news", "to-read"],
  data() {
    return {
      dateNow: new Date().toLocaleDateString(),
      openId: null,
    };
  },
  methods: {
    read() {
      this.openId = null;
      this.$emit("to-read");
    },
    toggle(itemId) {
      this.openId = this.openId === itemId ? null : itemId;
      if (this.openId) {
        this.$emit("open-news");
      }
    },
  },
};
</script>
