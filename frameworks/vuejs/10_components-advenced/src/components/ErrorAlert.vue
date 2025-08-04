<template>
  <dialog open>
    <slot> </slot>
  </dialog>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
dialog {
  position: fixed;
  margin: 0;
  top: 20vh;
  left: 30%;
  width: 40%;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.23);
  padding: 1rem;
}
</style>
