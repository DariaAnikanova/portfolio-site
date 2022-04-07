<template>
  <v-card
    flat
    tile
    rounded
    class="content--deco-border content-bg mt-2 mt-md-4"
  >
    <v-tabs
      v-model="currentTab"
      background-color="secondary"
      slider-color="cta"
      active-class="cta--text"
      class="accent--text align-items"
      centered
    >
      <v-tab
        v-for="(tab, index) in tabs"
        :key="tab.title"
        v-ripple="{ class: `accent--text` }"
        :disabled="tab.disabled"
      >
        <div class="d-flex accent--text">
          <v-icon left :color="currentTab === index ? 'cta' : 'accent'">{{
            tab.icon
          }}</v-icon>
          <div
            :class="currentTab === index ? 'cta--text' : 'accent--text'"
            class="my-auto"
          >
            {{ tab.title }}
          </div>
        </div>
        <v-spacer></v-spacer>
      </v-tab>

      <v-tabs-items v-model="currentTab" class="secondary">
        <v-tab-item
          v-for="(tab, index) in tabs"
          :key="index"
          transition="fade-transition"
        >
          <v-card flat tile color="secondary" class="px-4 pb-4">
            <v-card-text class="accent--text">
              <h3>{{ tab.description }}</h3>
              <div
                v-if="tab.title !== 'contact'"
                class="mt-2 mt-md-4"
                :class="
                  $vuetify.breakpoint.mdAndUp
                    ? 'grid-container-md'
                    : 'grid-container'
                "
              >
                <content-card
                  v-for="(info, index) in contentType"
                  :key="index"
                  :title="info.title"
                  :tech="info.tech"
                  :links="info.links"
                  :media="info.media"
                  :content="info.description || info.content"
                />
              </div>
              <div v-else>
                <contact-form :tab="currentTab" />
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
.content--deco-border {
  border-left: 2px solid #d57e8e;
  border-top: 2px solid #d57e8e;
}
</style>
<script>
import { mapGetters } from "vuex";
import ContentCard from "./ContentCard.vue";
import ContactForm from "./ContactForm.vue";

export default {
  name: "ContentContainer",
  components: { ContentCard, ContactForm },
  data: () => ({
    currentTab: 0,
  }),
  computed: {
    ...mapGetters({
      tabs: "getContentTabs",
      aboutContent: "getAboutContent",
      projects: "getProjects",
      blog: "getArticles",
      gallery: "getArt",
    }),
    contentType() {
      let content = null;
      switch (this.currentTab) {
        case 0:
          content = this.aboutContent;
          break;
        case 1:
          content = this.projects;
          break;
        case 2:
          content = this.blog;
          break;
        case 3:
          content = this.gallery;
          break;
      }
      return content;
    },
  },
};
</script>
