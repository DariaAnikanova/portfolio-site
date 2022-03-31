<template>
  <v-card flat width="100%">
    <v-toolbar flat color="primary" dark> </v-toolbar>

    <v-tabs
      vertical
      v-model="tab"
      background-color="primary"
      slider-color="cta"
      active-class="cta--text"
      class="accent--text"
    >
      <v-tab
        v-for="(item, index) in tabs"
        :key="item.title"
        v-ripple="{ class: `accent--text` }"
      >
        <div class="tab d-flex accent--text">
          <v-icon left :color="tab === index ? 'cta' : 'accent'">{{
            item.icon
          }}</v-icon>
          <div :class="tab === index ? 'cta--text' : 'accent--text'">
            {{ item.title }}
          </div>
        </div>
        <v-spacer></v-spacer>
      </v-tab>

      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in tabs" :key="item.title">
          <v-card flat>
            <v-card-text>{{ item.title }} Content</v-card-text>
            <div class="grid-container">
              <project-card v-for="n of 4" :key="n" />
            </div>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>
  </v-card>
</template>
<style lang="scss" scoped>
.grid-container {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
}
.tab {
  width: 100%;
  height: 100%;
  align-items: center;
}
</style>
<script>
import ProjectCard from "./ProjectCard.vue";

export default {
  name: "ContentContainer",
  components: { ProjectCard },
  data: () => ({
    tab: 0,
    tabs: [
      { title: "About", icon: "mdi-account-outline" },
      { title: "Projects", icon: "mdi-file-code-outline" },
      { title: "Blog", icon: "mdi-post-outline" },
      { title: "Gallery", icon: "mdi-palette-outline" },
    ],
  }),
};
</script>
