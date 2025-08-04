import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';
import AllUsers from './components/pages/AllUsers.vue';
import CourseGoals from './components/pages/CourseGoals.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: AllUsers },
    { path: '/course-goals', component: CourseGoals },
  ],
});

const app = createApp(App);
app.use(router);

app.component('base-modal', BaseModal);

router.isReady().then(function () {
  app.mount('#app');
});

//to only mount and therefore render your app once the router is fully set up and aware
//of the page that should be loaded., so this eg prevent animating the routes on first load
