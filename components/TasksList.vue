<template>
  <div class="tasks-list">
    <TaskCard v-for="task in tasks"
              :key="task.id"
              :task="task"/>
  </div>
</template>

<script>
import TaskCard from "@/components/TaskCard";

export default {
  name: "TasksList",
  components: {TaskCard},
  props: ["tasks"],
}
</script>

<style scoped>
.tasks-list{
  padding-top: 86px;
}
</style>
