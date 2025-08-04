<template>
  <div>
    <the-header></the-header>
    <!-- <badge-list></badge-list>  -->
    <!-- <user-info></user-info>  -->
    <!-- <UserInfo
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    />  -->
    <!-- <course-goals> -->
    <!-- <template #default="slotProps"> -->
    <!-- slot prop is an arbitrary name, its an object hold all  -->
    <!-- the passed props from CourseGoal slot, default slot in this case  -->
    <!-- <h2>{{ slotProps.item }}</h2> -->
    <!-- <p>{{ slotProps.anotherProp }}</p> -->
    <!-- </template> -->
    <!--  </course-goals>  -->
    <button @click="setSelectedComponent('active-goals')">active goals</button>
    <button @click="setSelectedComponent('manage-goals')">manage goals</button>
    <!-- <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
    <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals>  or: -->
    <!-- keep-alive, prevent the data being lost after switching back or forward -->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
// import BadgeList from "./components/BadgeList.vue";
// import UserInfo from "./components/UserInfo.vue";
// import CourseGoals from "./components/CourseGoals.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";

export default {
  components: {
    // "badge-list": BadgeList,
    // UserInfo,
    // CourseGoals,
    "the-header": TheHeader, //or :
    //  TheHeader: TheHeader, //and you'll still using it like:
    // <the-header></the-header>  or <TheHeader />
    ActiveGoals,
    ManageGoals,
  },
  data() {
    return {
      selectedComponent: "active-goals",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },

  methods: {
    setSelectedComponent(com) {
      this.selectedComponent = com;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
