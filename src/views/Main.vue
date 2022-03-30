<template>
  <v-container fluid fill-height class="main-bg px-2 pt-2 pb-0">
    <v-container>
      <div class="d-flex">
        <v-avatar size="200"
          ><v-img
            src="https://placekitten.com/200/300"
            alt="Photo of Daria Anikanova"
          ></v-img
        ></v-avatar>
        <div>
          <h1 class="accent--text text-uppercase text-h4">Daria Anikanova</h1>
          <h2 class="accent--text">Front End Developer</h2>
        </div>
      </div>

      <div class="grid-container pa-0">
        <project-card v-for="n in 3" :key="n" />
      </div>
    </v-container>
  </v-container>
</template>
<style lang="scss" scoped>
.main-bg {
  background: url("../assets/images/darianova.svg") round content-box;
}
.grid-container {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
}
</style>
<script>
import ProjectCard from "../components/ProjectCard.vue";
export default {
  name: "Main",
  components: { ProjectCard },
};
</script>
