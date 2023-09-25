<template>
  <div class="avatar">{{ avatar }}</div>
</template>

<script>
export default {
  name: "Avatar",
  props: ["name"],
  computed: {
    avatar() {
      return this.name.split(" ").map((word, index) => index < 2 ? word[0] : "").join("");
    }
  }
}
</script>

<style scoped>
.avatar {
  width: 51px;
  height: 51px;
  border-radius: 50%;
  background-color: #ff7f39;
  color: #ffffff;
  text-transform: uppercase;
  font-size: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
