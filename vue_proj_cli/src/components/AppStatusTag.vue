<template>
  <span :class="['status-tag', statusClass]">{{ status }}</span>
</template>

<script>
import { computed } from "vue";

export default {
  props: ["status"],
  setup(props) {
    const statusMap = {
      completed: "status-active",
      "in-progress": "status-warning",
      cancelled: "status-danger",
    };

    const statusClass = computed(() => {
      return statusMap[props.status] || "status-default";
    });
    return {
      statusClass,
    };
  },
};
</script>

<style scoped>
.status-tag {
  display: inline-block; /* Allows padding and margin */
  padding: 0.2em 0.6em; /* Adds space around the text */
  font-size: 0.8em; /* Smaller font size */
  font-weight: bold; /* Bold text */
  text-align: center; /* Centers text */
  border-radius: 1em; /* Creates rounded corners (pill shape) */
  color: white; /* Default text color */
  white-space: nowrap; /* Prevents the tag from wrapping */
}

/* Color styles for specific statuses */
.status-active {
  background-color: #28a745; /* Green color for active */
}

.status-warning {
  background-color: #ffc107; /* Yellow color for pending */
  color: #333; /* Change text color for better contrast */
}

.status-danger {
  background-color: #dc3545; /* Red color for error */
}
</style>
