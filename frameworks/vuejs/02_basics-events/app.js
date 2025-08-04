const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      lastName: "",
      fullName: "",
      confirmedName: "",
    };
  },
  watch: {
    // name(value) {
    //   if (value === "") this.fullName = "";
    //   else this.fullName = value + " " + this.lastName;
    // },
    // lastName(value) {
    //   if (value === "") this.fullName = "";
    //   else this.fullName = this.name + " " + value;
    // },
    // compare watch to the computed way, computed its shorter

    // but here watcher is really helpful
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(() => {
          that.counter = 0;
        }, 2000);
      }
    },
  },
  methods: {
    setName(eventProvidedByDefault) {
      this.name = eventProvidedByDefault.target.value;
    },
    setName2(event, lastName) {
      // event object is restored through out vue
      this.fullName = event.target.value + " " + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    submitForm() {
      alert("hey there");
    },
    confirmInput() {
      this.confirmedName = this.fullName;
    },
    resetName() {
      this.name = "";
    },

    outputFullName() {
      console.log(
        "this will be run even though eg we press the counter not the input"
      );
      if (this.name === "") return "";
      return this.name + " " + "Khatib";
    },
  },

  computed: {
    computedFullName() {
      console.log(
        "this will prevent reloading the entire app if we triggered something somewhere else "
      );
      if (this.name === "" || this.lastName === "") return "";
      return this.name + " " + this.lastName;
    },
  },
});

app.mount("#events");
