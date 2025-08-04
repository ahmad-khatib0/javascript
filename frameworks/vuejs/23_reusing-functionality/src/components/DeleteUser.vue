<template>
  <user-alert v-if="alertIsVisible" :title="alertTitle" @close="hideAlert">
    <p>Do you want to continue with deleting a user?</p>
  </user-alert>
  <section>
    <h2>Delete a User</h2>
    <button @click="showAlert">Delete User</button>
  </section>
</template>

<script>
import UserAlert from '../components/UserAlert.vue';
import alertMixin from '../mixins/alert';
export default {
  mixins: [alertMixin],
  data() {
    return {
      alertTitle: 'Wanna delete user? ',
      // alertIsVisible: true, //this will override what in side the mixin
    };
  },
  components: {
    UserAlert,
  },
};
</script>