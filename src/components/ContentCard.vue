<template>
  <v-card
    class="mx-auto"
    tile
    outlined
    width="20vw"
    max-height="350px"
    color="primary"
  >
    <v-img
      height="45%"
      v-if="media"
      :src="media[0]"
      gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,1)"
      class="align-end"
    >
      <v-card-title class="text-h5 mb-1 text-uppercase accent--text">
        {{ title }}
      </v-card-title>
    </v-img>

    <v-card-subtitle v-if="tech">
      <v-btn
        color="accent"
        class="no-events"
        outlined
        tile
        x-small
        v-for="(item, index) in tech"
        :key="index"
        >{{ item }}</v-btn
      >
    </v-card-subtitle>
    <v-card-text class="accent--text">
      {{ content }}
    </v-card-text>
    <v-card-actions v-if="links" class="px-4 pt-0">
      <v-btn
        v-for="(link, index) in links"
        :key="index"
        :class="link.disabled ? 'no-events' : ''"
        :href="link.url"
        :color="link.disabled ? 'accent darken-2' : 'cta'"
        target="_blank"
        tile
        outlined
        icon
        small
      >
        <v-icon>{{ link.icon }}</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<style lang="scss" scoped>
.no-events {
  pointer-events: none;
}

.content-text {
  max-width: 250px;
  overflow-wrap: break-word;
  word-break: break-word;
}
</style>
<script>
export default {
  name: "ProjectCard",
  props: {
    title: String,
    tech: Array,
    media: Array,
    links: Object,
    content: String,
  },
};
</script>
