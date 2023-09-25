<template>
  <div class="empty-layout">
    <Nuxt/>
  </div>
</template>

<script>
export default {
  name: "empty"
}
</script>

<style scoped>
.empty-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 18px;
}
</style>
