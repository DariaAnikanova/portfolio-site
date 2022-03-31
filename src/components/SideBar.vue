<template>
  <v-navigation-drawer app clipped class="accent">
    <v-list>
      <v-list-item v-for="link in links" :key="link.title" link class="accent">
        <v-list-item-icon>
          <v-icon large color="primary">{{ link.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="title text-uppercase font-weight-bold">{{
            link.title
          }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<style lang="scss" scoped>
.title {
  letter-spacing: 0.1rem !important;
}
</style>
<script>
export default {
  name: "SideBar",
  data: () => ({
    links: [
      { title: "Projects", icon: "mdi-file-code-outline" },
      { title: "Blog", icon: "mdi-post-outline" },
      { title: "Gallery", icon: "mdi-palette-outline" },
    ],
  }),
};
</script>
