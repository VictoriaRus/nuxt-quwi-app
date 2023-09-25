<template>
  <div class="container">
    <TasksList :tasks="tasks"/>
  </div>
</template>

<script>
import TasksList from "@/components/TasksList";

export default {
  name: "Index",
  middleware: "authenticated",
  components:{TasksList},
  async fetch({store}) {
    if (store.getters["tasks/getTasks"].length === 0) {
      await store.dispatch("tasks/fetchTasks")
    }
  },
  computed: {
    tasks() {
      return this.$store.getters["tasks/getTasks"]
    }
  }
}
</script>

<style scoped>
.container {
  width: 760px;
  padding: 0 15px;
  margin: 0 auto;
}
</style>
