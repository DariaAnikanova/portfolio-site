<template>
  <v-app class="background">
    <Header />
    <v-main class="border"><Main /> </v-main>
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
<style lang="scss">
.content-bg {
  background: #191f32;
}
</style>
<script>
import Header from "./components/Header.vue";
import Main from "./views/Main.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer,
  },
  data: () => ({
    //
  }),
};
</script>
