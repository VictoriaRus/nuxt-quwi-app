<template>
  <div>
    <div>
      <h1>{{ error.statusCode }}</h1>
      <div>{{ `errors.${error.statusCode}` }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "error",
  props: {
    error: {
      type: Object,
      required: true,
    },
  }
}
</script>

<style scoped>

</style>
