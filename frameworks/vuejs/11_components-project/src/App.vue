<template>
  <the-header title="RememberMe"></the-header>
  <the-resources></the-resources>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import TheResources from './components/learning-resources/TheResources.vue';
// import { v4 as uuidv4 } from 'uuid';
export default {
  components: {
    TheHeader,
    TheResources,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
