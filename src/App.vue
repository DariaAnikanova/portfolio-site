<template>
  <v-app>
    <Header />
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
</style>
<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data: () => ({
    //
  }),
};
</script>
