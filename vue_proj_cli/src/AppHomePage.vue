<template>
  <div class="container">
    <div class="form-side">
      <div class="form-unit">
        <app-selec v-model="selectedOption" :options="options"></app-selec>
      </div>
      <div class="form-unit">
        <app-text-input v-model="typed"></app-text-input>
      </div>
      <div>
        <button class="button" :class="{ disabled: !isValid }" @click="addUnit">
          Add
        </button>
      </div>
    </div>
    <div class="main-content">
      <div class="main-content-container">
        <div v-for="(item, index) in mainContent" :key="index">
          <h2 v-if="item.type === 'Title'">{{ item.content }}</h2>
          <p v-else-if="item.type === 'Text'">{{ item.content }}</p>
          <img
            v-else-if="item.type === 'Avatar'"
            :src="item.content"
            alt="Avatar"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="container-2">
    <div class="button" @click="handleUpload" v-if="showButton">
      Load Comments
    </div>
    <app-comments ref="commentsRef" v-if="showComments"></app-comments>
  </div>
</template>

<script>
import AppSelec from "./AppSelec.vue";
import AppTextInput from "./AppTextInput.vue";
import AppComments from "./AppComments.vue";

export default {
  data() {
    return {
      //select
      selectedOption: "Title",
      options: ["Title", "Avatar", "Text"],

      //text
      typed: "",

      //main-content
      mainContent: [],

      //comments
      showButton: true,
      showComments: false,
    };
  },
  computed: {
    isValid() {
      return this.typed.length > 3;
    },
  },
  components: { AppSelec, AppTextInput, AppComments },
  methods: {
    async handleUpload() {
      this.showComments = true;
      await this.$nextTick();
      await this.$refs.commentsRef.loadComments();
      this.showButton = false;
    },
    addUnit() {
      console.log("clicked");
      if (this.typed.trim().length === 0) return; // ignore empty
      this.mainContent.push({
        type: this.selectedOption,
        content: this.typed.trim(),
      });
      this.typed = ""; // clear textarea
      this.selectedOption = "Title";
    },
  },
};
</script>

<style scoped>
.container-2 {
  max-width: 1900px;
  display: flex;
  justify-content: space-between;
}
</style>
