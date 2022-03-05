<template>
  <section class="projects">
    <h1>This is the projects page</h1>
    <div class="projects_container">
      <project-card />
    </div>
  </section>
</template>

<script>
import ProjectCard from "../components/ProjectCard.vue";
export default {
  name: "Projects",
  components: { ProjectCard },
};
</script>
