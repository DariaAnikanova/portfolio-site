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
            <v-card-text class="accent--text"
              >{{ item.title }} Content
              <p>Something</p></v-card-text
            >
            <v-card-content
              ><div
                :class="
                  $vuetify.breakpoint.mdAndUp
                    ? 'grid-container-md'
                    : 'grid-container'
                "
              >
                <project-card v-for="n of 3" :key="n" /></div
            ></v-card-content>
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
import ProjectCard from "./ProjectCard.vue";

export default {
  name: "ContentContainer",
  components: { ProjectCard },
  data: () => ({
    tab: 0,
    tabs: [
      { title: "About", icon: "mdi-account-outline", disabled: false },
      { title: "Projects", icon: "mdi-file-code-outline", disabled: false },
      { title: "Blog", icon: "mdi-post-outline", disabled: true },
      { title: "Gallery", icon: "mdi-palette-outline", disabled: true },
      { title: "Contact", icon: "mdi-email-outline", disabled: false },
    ],
  }),
};
</script>
