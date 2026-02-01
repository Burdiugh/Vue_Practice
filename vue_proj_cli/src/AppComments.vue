<template>
  <div class="main-content">
    <div v-if="comments.length === 0">Loading comments...</div>
    <ul v-else>
      <li v-for="comment in comments" :key="comment.id">
        <h4>{{ comment.username }}</h4>
        <p>{{ comment.comment }}</p>
        <hr />
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      comments: [],

      //commmets
      isShowed: false,
    };
  },
  methods: {
    async uploadComments() {
      const result = await axios.post(
        "https://course-work-de16f-default-rtdb.firebaseio.com/comments.json",
        this.comments
      );
      console.log(result);
    },
    async loadComments() {
      const { data } = await axios.get(
        "https://course-work-de16f-default-rtdb.firebaseio.com/comments.json"
      );
      this.comments = Object.entries(data || {}).flatMap(
        ([id, commentArray]) => {
          // if each Firebase key stores an array of comments
          if (Array.isArray(commentArray)) {
            return commentArray.map((comment) => ({ ...comment, id }));
          } else {
            // if each Firebase key is a single object
            return [{ ...commentArray, id }];
          }
        }
      );
    },
  },
  mounted() {
    // this.uploadComments();
  },
};
</script>
