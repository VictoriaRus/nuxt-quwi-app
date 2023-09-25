<template>
  <button class="but" @click="onClick">
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    onClick: {
      type: Function,
      required: true
    }
  }
}
</script>

<style scoped>
.but {
  background: #c44512;
  width: 100%;
  border-radius: 5px;
  padding: 15px;
  border: none;
  cursor: pointer;
  color: #ffffff;
  font-size: 18px;
}

.but:hover {
  opacity: .7;
}
</style>
