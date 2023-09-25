<template>
  <div class="card">
    <div class="col card__header">
      <div class="card__img">
        <img v-if="task.logo_url" :src="task.logo_url" :alt="task.name">
        <Avatar v-else :name="task.name"/>
      </div>
      <h4 class="card__title">{{ task.name }}</h4>
    </div>
    <div class="col card__status">{{ is_active }}</div>
    <div class="col card__time">
      <div class="time">time this week <span>00:00:00</span></div>
      <div class="time">this month <span>00:00:00</span></div>
      <div class="time">total <span>00:00:00</span></div>
    </div>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";

export default {
  name: "TaskCard",
  props: ["task"],
  components: {Avatar},
  computed: {
    is_active() {
      return this.task.is_active ? "Active" : "Inactive"
    }
  },
}
</script>

<style scoped>
.card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border: 1px solid #dedede;
  padding: 20px;
  color: #000;
  margin: 0 auto 7px;
  border-radius: 5px;
  word-spacing: 1px;
}

.col {
  width: 33.3%;
}

.card__header {
  display: flex;
  align-items: center;
}

.card__img {
  width: 51px;
  border-radius: 50%;
}

.card__img img {
  width: 100%;
}

.card__title {
  margin-left: 20px;
}

.card__status {
  font-weight: 600;
  text-align: center;
  color: #64c400;
}

.time {
  display: flex;
  justify-content: space-between;
}

.time span {
  font-weight: 600;
}
</style>
