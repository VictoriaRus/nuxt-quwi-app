<template>
  <div class="modal-overlay" @click="closeModel">
    <div class="modal" @click.stop>
      <slot></slot>
    </div>
    <div class="close" @click="closeModel">
      <img class="close-img" src="@/assets/images/icons-close.png" alt="icons-close"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  methods: {
    closeModel() {
      this.$emit("closeModel");
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, .2);;
}

.modal {
  text-align: center;
  background-color: white;
  height: 500px;
  width: 500px;
  margin-top: 10%;
  padding: 60px;
  border-radius: 5px;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, .44);
}

.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}

.close-img {
  width: 25px;
}

</style>
