const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "manuel lorenz",
          phone: "333-222-3445",
          email: "manuel@gmail.com",
        },
        {
          id: "julie",
          name: "julie lorenz",
          phone: "333-222-3445",
          email: "julie@gmail.com",
        },
      ],
    };
  },
  computed: {},
});

app.component("friends-contact", {
  template: `
  <li>
      <h2>{{ friend.name }}</h2>
      <button @click="toggleDetails">
        {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
      </button>
      <ul v-if="detailsAreVisible">
        <li><strong>Phone: </strong>{{ friend.phone }}</li>
        <li><strong>Email: </strong>{{ friend.email }}</li>
      </ul>
    </li>`,
  data() {
    return {
      friend: {
        id: "manuel",
        name: "manuel lorenz",
        phone: "333-222-3445",
        email: "manuel@gmail.com",
      },
      detailsAreVisible: false, //if you have the same name inside
      // createApp config as here , that ok . no clash will be
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
