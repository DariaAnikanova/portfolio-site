<template>
  <v-card
    flat
    tile
    rounded
    width="100%"
    class="content-container content-bg mt-2 mt-md-4"
  >
    <v-tabs
      v-model="tab"
      background-color="primary"
      slider-color="cta"
      active-class="cta--text"
      class="accent--text align-items"
      centered
    >
      <v-tab
        v-for="(item, index) in tabs"
        :key="item.title"
        v-ripple="{ class: `accent--text` }"
        :disabled="item.disabled"
      >
        <div class="d-flex accent--text">
          <v-icon left :color="tab === index ? 'cta' : 'accent'">{{
            item.icon
          }}</v-icon>
          <div
            :class="tab === index ? 'cta--text' : 'accent--text'"
            class="my-auto"
          >
            {{ item.title }}
          </div>
        </div>
        <v-spacer></v-spacer>
      </v-tab>

      <v-tabs-items v-model="tab" class="primary">
        <v-tab-item
          v-for="item in tabs"
          :key="item.title"
          transition="fade-transition"
        >
          <v-card flat tile color="primary" class="px-4 pb-4">
            <v-card-text class="accent--text">
              <h3>{{ item.description }}</h3>
              <div
                class="mt-2 mt-md-4"
                :class="
                  $vuetify.breakpoint.mdAndUp
                    ? 'grid-container-md'
                    : 'grid-container'
                "
              >
                <project-card v-for="n of 3" :key="n" />
              </div>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>
  </v-card>
</template>
<style lang="scss" scoped>
.grid-container {
  display: grid;
  gap: 0.5rem;
  grid-template-columns: 1fr;
}
.grid-container-md {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
}
.content-container {
  border-left: 2px solid #d57e8e;
  border-top: 2px solid #d57e8e;
}
</style>
<script>
import { mapGetters } from "vuex";
import ProjectCard from "./ProjectCard.vue";

export default {
  name: "ContentContainer",
  components: { ProjectCard },
  data: () => ({
    tab: 0,
  }),
  computed: {
    ...mapGetters({
      tabs: "getContentTabs",
      aboutContent: "Root/about/getAboutContent",
      projects: "Root/projects/getProjects",
      blog: "Root/blog/getArticles",
      gallery: "Root/gallery/getArt",
    }),
  },
};
</script>
