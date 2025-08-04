<template>
  <section class="container">
    <!-- <h2>{{ name }}</h2>
    <h3>{{ age }}</h3>  method 1-->
    <!-- <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>  method 2 -->
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
    <button @click="setAge">Change Age</button>
    <div>
      <!-- <input type="text" placeholder="First Name  " @input="setFirstName" /> -->
      <!-- <input type="text" placeholder="Last Name  " @input="setLastName" /> -->
      <!-- <p>{{ uName }}</p> -->
      <input type="text" placeholder="First Name  " v-model="firstName" />
      <input type="text" placeholder="Last Name  " v-model="lastName" />
      <p>{{ firstName }} {{ lastName }}</p>
      <p>{{ age }}</p>
      <second-app></second-app>
    </div>
  </section>
</template>

<script>
// import { ref } from 'vue';
import { reactive, ref, isRef, isReactive, toRefs, computed, watch } from 'vue';
import SecondApp from './components/SecondApp.vue';
export default {
  components: { SecondApp },
  setup() {
    // const UName = ref('Maximilian'); method
    // const userAge = ref(44);
    // under the hood, it creates an object. This string is stored in that object
    // and Vue will watch this object, so that whenever we assign a new value instead
    // of that original string.Vue will be aware of it and is able to update the DOM.

    // setTimeout(() => {
    //   UName.value = 'Ahmad';
    //   userAge.value = 22;
    // }, 2000);
    // return { userName: UName, age: userAge }; method 1 end

    // const user = ref({    //method 2
    //   name: 'Maximilian ',
    //   age: 33,
    // });
    // setTimeout(() => {
    //   user.value.name = 'Ahmad';
    //   user.value.age = 23;
    // }, 2000);
    // return { user };  //method 2 end

    // const user = reactive({
    //   //method 3, reactive works just with objects, while ref works with all
    //   name: 'Maximilian ',
    //   age: 33,
    // });
    // setTimeout(() => {
    //   user.name = 'Ahmad';
    //   user.age = 23;
    // }, 2000);
    // return { user }; //method 3 end

    const UAge = ref(23);
    const user = reactive({
      name: 'Maximilian ',
      age: 33,
    });
    console.log(isRef(UAge.value)); //false
    console.log(isReactive(user.name)); // false
    // while , because the entire object is reactive:
    console.log(isRef(UAge)); //  true
    console.log(isReactive(user)); // true

    //
    //
    const userRefs = toRefs(user); //converting it  to refs instead of reactive
    console.log(isRef(userRefs.name)); //true, because now its ref

    function setNewAge() {
      userAge.value = 37;
    }

    const firstName = ref('');
    const lastName = ref('');

    function setFirstName(event) {
      firstName.value = event.target.value;
    }

    function setLastName(event) {
      lastName.value = event.target.value;
    }

    const uName = computed(function () {
      return firstName.value + ' ' + lastName.value;
    });

    const userAge = ref(33);

    watch(userAge, function (newValue, oldValue) {
      console.log('old value ' + oldValue);
      console.log('new value ' + newValue);
    });
    watch([userAge, uName], function (newValues, oldValues) {
      console.log('old value ' + oldValues[0]);
      console.log('new value ' + newValues[0]);
      console.log('old value ' + oldValues[1]);
      console.log('new value ' + newValues[1]);
    });

    return {
      user,
      userName: userRefs.name,
      age: userRefs.age,
      setAge: setNewAge,
      setFirstName,
      setLastName,
      uName,
      firstName,
      lastName,
      userAge,
    };
    // so now this eg => userName: userRefs.name, is valid , with the help of
    // toRefs ,instead of  exposing the entire object , so these properties are reactive
    // and any changes happen to them will be reflect in the template
  },

  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
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