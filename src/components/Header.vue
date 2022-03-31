<template>
  <v-app-bar app flat clipped-left color="accent" class="pl-4">
    <v-app-bar-nav-icon
      ><v-avatar color="accent--text primary">DN</v-avatar></v-app-bar-nav-icon
    >
    <v-spacer></v-spacer>
    <v-btn fab small depressed color="primary" class="mr-2">
      <v-icon color="accent">mdi-twitter</v-icon>
    </v-btn>
    <v-btn fab small depressed color="primary" class="mr-2">
      <v-icon color="accent">mdi-linkedin</v-icon>
    </v-btn>
    <v-btn fab small depressed color="primary">
      <v-icon color="accent">mdi-github</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
  methods: {},
};
</script>

