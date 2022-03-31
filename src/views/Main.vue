<template>
  <v-container fluid fill-height class="main-bg px-2 pt-2 pb-0">
    <v-container fill-height>
      <div class="d-flex align-center content-bg">
        <!-- <v-avatar size="15rem"
          ><v-img
            src="https://placekitten.com/200/300"
            alt="Photo of Daria Anikanova"
          ></v-img
        ></v-avatar> -->
        <v-img
          src="https://placekitten.com/200/300"
          alt="Photo of Daria Anikanova"
        ></v-img>
        <div class="ml-10">
          <h1 class="accent--text name">
            <span class="name_first">Daria</span>
            <br />
            <span class="name_last text-uppercase d-inline-block">
              Anikanova
            </span>
          </h1>
          <h2 class="accent--text">Front End Developer</h2>
        </div>
      </div>
      <Content-Container />
    </v-container>
  </v-container>
</template>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Pragati+Narrow:wght@400;700&display=swap");

.main-bg {
  background: url("../assets/images/darianova.svg") round content-box;
}

.name {
  font-family: "Pragati Narrow", sans-serif !important;

  &_last {
    font-size: 10vw;
    letter-spacing: 1vw;
    font-weight: 700;
    line-height: 8vw;
  }
}
</style>
<script>
import ContentContainer from "../components/ContentContainer.vue";
export default {
  name: "Main",
  components: { ContentContainer },
};
</script>

