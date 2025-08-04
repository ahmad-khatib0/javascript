import { createApp } from "vue";
import App from "./App.vue";
import FriendsContact from "./components/FriendsContact.vue";
import NewFriend from "./components/NewFriend.vue";
const app = createApp(App);
app.component("friends-contact", FriendsContact);
app.component("new-friend", NewFriend);
app.mount("#app");
