<template>
  <v-app class="background">
    <Header />
    <Side-Bar />
    <v-main class="border">
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>
<style lang="scss" scoped>
.border {
  border-left: 15px solid #d57e8e;
  border-right: 15px solid #d57e8e;
}
.background {
  background-color: #242d48 !important;
}
</style>
<script>
import Header from "./components/Header.vue";
import SideBar from "./components/SideBar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    SideBar,
    Footer,
  },
  data: () => ({
    //
  }),
};
</script>

