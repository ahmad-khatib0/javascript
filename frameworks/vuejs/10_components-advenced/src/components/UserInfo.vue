<template>
  <section>
    <base-card>
      <template #header>
        <!--this tells vue the content of this template will go in slot named header -->
        <h3>{{ fullName }}</h3>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </template>
      <template #default>
        <p>{{ infoText }}</p>
      </template>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ["fullName", "infoText", "role"],
};
</script>

<style scoped>
/* this keyword to lock the style to the current file only  */
</style>
