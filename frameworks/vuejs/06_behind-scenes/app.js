const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
      this.message = this.$refs.userInput.value;
      // console.dir(this.$refs.userInput);
    },
  },

  beforeCreate() {
    console.log("beforeCreated nothing on the screen");
  },
  created() {
    console.log("created nothing on the screen");
  },
  beforeMount() {
    console.log("beforeMount nothing on the screen");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate ");
  },
  updated() {
    console.log("updated");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmount");
  },
});

app.mount("#app");
setTimeout(() => {
  app.unmount("#app");
}, 4000);

const app2 = Vue.createApp({
  template: `<p>{{ favoriteThing }}</p>`,
  data() {
    return {
      favoriteThing: "the best thing is programming ",
    };
  },
});

app2.mount("#app2");

const data = {
  message: "hello!",
  longMessage: "Hello World !",
};
const handler = {
  set(target, key, value) {
    if (key === "message") {
      target.longMessage = value + " World!";
    }
    target.message = value;
    // console.log(target);
    // console.log(key);
    // console.log(value);
  },
};
const proxy = new Proxy(data, handler);
proxy.message = "hello !!! ";

console.log(proxy.longMessage);
