<template>
  <v-app-bar app flat color="accent" class="pl-4">
    <v-app-bar-nav-icon
      ><v-avatar color="accent--text primary">DN</v-avatar></v-app-bar-nav-icon
    >
    <v-spacer></v-spacer>
    <v-btn
      v-for="(social, index) in socials"
      :key="index"
      :href="social.link"
      target="_blank"
      fab
      small
      depressed
      color="primary"
      class="mr-2"
    >
      <v-icon color="accent">{{ social.icon }}</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
  computed: {
    socials() {
      return this.$store.getters.getSocials;
    },
  },
};
</script>

