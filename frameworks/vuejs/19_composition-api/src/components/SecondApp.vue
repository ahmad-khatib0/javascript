<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName">Set Last Name</button>
    </div>
    <div>
      <p>{{ age }}</p>
      <button @click="setAge">Set age</button>
    </div>
  </section>
  <section>
    <div class="container">
      <user-data :first-name="firstName" :last-name="lastName"></user-data>
    </div>
  </section>
</template>

<script>
import { ref, computed, provide } from 'vue';
import UserData from './UserData.vue';

export default {
  components: { UserData },
  setup() {
    const firstName = ref('');
    const lastName = ref('');
    const lastNameInput = ref(null);
    const uAge = ref(24);
    const uName = computed(function () {
      return firstName.value + ' ' + lastName.value;
    });

    function setLastName() {
      lastName.value = lastNameInput.value.value;
    }

    function setAge() {
      uAge.value = 44;
    }

    provide('userAge', uAge);
    return {
      userName: uName,
      firstName,
      lastName,
      lastNameInput,
      setLastName,
      age: uAge,
      setAge,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>