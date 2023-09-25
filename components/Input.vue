<template>
  <input class="input"
         :placeholder="placeholder"
         :type="type"
         :value="value"
         @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  name: "Input",
  props: ["type","placeholder","value"],
}
</script>

<style scoped>
.input {
  border: 1px solid #dadada;
  border-radius: 5px;
  padding: 15px;
  width: 100%;
  outline: none;
  font-size: 18px;
}
</style>
