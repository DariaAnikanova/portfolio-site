<template>
  <v-card class="mx-auto" tile outlined min-width="100%">
    <v-list-item three-line>
      <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="text-h5 mb-1">
          Project Name
        </v-list-item-title>
        <v-list-item-subtitle>Tech</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn outlined rounded icon text> <v-icon>mdi-link</v-icon> </v-btn>
      <v-btn outlined rounded icon text> <v-icon>mdi-github</v-icon> </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "ProjectCard",
};
</script>

