<template>
  <v-card
    class="mx-auto"
    tile
    outlined
    width="100%"
    min-height="200px"
    max-height="350px"
    color="accent_2"
  >
    <v-img
      height="45%"
      v-if="media"
      :src="media[0]"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.8)"
      class="align-end"
    >
    </v-img>
    <v-card-title class="text-h5 mb-1 text-uppercase">
      {{ title }}
    </v-card-title>
    <v-card-subtitle v-if="tech">
      <v-btn
        color="accent"
        outlined
        tile
        small
        v-for="(item, index) in tech"
        :key="index"
        >{{ item }}</v-btn
      >
    </v-card-subtitle>
    <v-card-text>{{ content }}</v-card-text>
    <v-card-actions v-if="links" class="px-4 pt-0">
      <v-btn
        v-for="(link, index) in links"
        :key="index"
        :disabled="link.disabled"
        :href="link.url"
        color="accent"
        target="_blank"
        outlined
        tile
        icon
        small
      >
        <v-icon>{{ link.icon }}</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
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
