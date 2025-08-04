<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <slot :item="goal" another-prop="..."></slot>
      <!-- :item="goal" is called scoped slot -->
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      goals: ["finish the course ", "learn vue "],
    };
  },
};
</script>

<style></style>
