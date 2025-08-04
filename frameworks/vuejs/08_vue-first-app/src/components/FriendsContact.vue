<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleFavorite">
      Toggle Favorite
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone: </strong> {{ phoneNumber }}</li>
      <li><strong>Email: </strong> {{ emailAddress }}</li>
    </ul>

    <button @click="$emit('delete', name)">Delete</button>
    <!-- alternative way instead of defining a method  -->
  </li>
</template>

<script>
export default {
  // props: ["name", "phoneNumber", "emailAddress", "isFavorite"],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false, //default can be a function
      // validator: function(value) {
      //   return value === "1" || value === "0";
      // },
    },
  },
  // In props you will define which props this component receives. In emits, you
  //  will define which custom events your component will eventually at some point
  // emit., its not mandatory, but for the purpose of documenting your code
  // emits: ["toggle-favorite"], //or
  emits: {
    "toggle-favorite": function(id) {
      //  so here means that toggle-favorite is an event handled by function takes an id as arg
      if (id) return true;
      else {
        console.warn("the id is missing");
        return false;
      }
    },
    delete: "delete",
  },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      // if (this.isFavorite === "1") this.isFavorite = "0";
      // else this.isFavorite = "1"; //this tow lines of code incorrect ,
      // because props in vue are immutable, so the solution was to assign it to isFavoriteFriend
      // this.isFavoriteFriend = !this.isFavoriteFriend;
      this.$emit("toggle-favorite", this.id);

      // And this allows you to emit your own custom event to which you then can listen
      // from inside the parent component... note that the name is in kepab-case
      // and the second arg is the data you wanna to pass it up to the parent
    },

    deleteFriend() {},
  },
};
</script>

<style></style>
