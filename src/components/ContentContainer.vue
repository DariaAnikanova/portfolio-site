<template>
  <v-card flat width="100%">
    <v-tabs
      vertical
      v-model="tab"
      background-color="primary"
      slider-color="accent"
    >
      <v-tab
        v-for="item in tabs"
        :key="item.title"
        v-ripple="{ class: `accent--text` }"
        active-class=""
      >
        <v-hover v-slot="{ hover }" open-delay="0">
          <div class="tab d-flex">
            <v-icon left :color="hover ? 'cta' : 'accent'">{{
              item.icon
            }}</v-icon>
            <div :class="hover ? 'cta--text' : 'accent--text'">
              {{ item.title }}
            </div>
          </div>
        </v-hover>

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
    tab: "About",
    tabs: [
      { title: "About", icon: "mdi-account-outline" },
      { title: "Projects", icon: "mdi-file-code-outline" },
      { title: "Blog", icon: "mdi-post-outline" },
      { title: "Gallery", icon: "mdi-palette-outline" },
    ],
  }),
};
</script>
