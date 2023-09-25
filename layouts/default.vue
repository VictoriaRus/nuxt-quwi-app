<template>
  <div class="default">
    <The_Header/>
    <Nuxt/>
  </div>
</template>

<script>
import The_Header from "@/components/The_Header";

export default {
  name: "default",
  components:{The_Header},
}
</script>

<style scoped>
.default {
  font-family: Arial,Helvetica,sans-serif;
  background-color: #f4f4f4;
  min-height: 100vh;
  font-size: 14px;
}
</style>
