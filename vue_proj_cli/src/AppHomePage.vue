<template>
  <div class="container">
    <div>
      <h2>
        Read breaking news {{ dateNow }}: clicked: {{ count }} : read
        {{ read }}
      </h2>
    </div>
  </div>

  <app-news @to-read="read++" @open-news="count++" :news="news"></app-news>
</template>

<script>
import AppNews from "./components/AppNews.vue";

export default {
  data() {
    return {
      count: 0,
      read: 0,
      news: [
        {
          id: 1,
          title: "Something happened in the USA",
          info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod incidunt, non optio magnam aliquam qui sapiente voluptatibus nobis perspiciatis cum beatae iusto ullam saepe, quae recusandae nisi? Id, ducimus. Porro?",
        },
        {
          id: 2,
          title: "Kolya has done it!",
          info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod incidunt, non optio magnam aliquam qui sapiente voluptatibus nobis perspiciatis cum beatae iusto ullam saepe, quae recusandae nisi? Id, ducimus. Porro?",
        },
      ],
    };
  },
  components: {
    "app-news": AppNews,
  },
};
</script>
