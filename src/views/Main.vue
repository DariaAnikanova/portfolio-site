<template>
  <v-container fluid fill-height class="main-bg px-2 pt-2 pb-0">
    <v-container fill-height class="justify-center">
      <div class="align-center mb-auto">
        <!-- <v-avatar size="15rem"
          ><v-img
            src="https://placekitten.com/200/300"
            alt="Photo of Daria Anikanova"
          ></v-img
        ></v-avatar> -->

        <div class="deco-border d-flex flex-column pa-4 content-bg">
          <h1
            class="accent--text text-uppercase name d-flex flex-column align-center justify-center"
          >
            <span class="name_first">Daria</span>
            <span class="name_last">Anikanova</span>
          </h1>
        </div>
        <Content-Container />
      </div>
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
  &_first {
    font-size: 2vw;
    letter-spacing: 0.2vw;
  }
  &_last {
    font-size: 10vw;
    font-weight: 500;
    letter-spacing: 0.5vw;
    line-height: 70%;
  }
}
.subtitle {
  font-family: "Pragati Narrow", sans-serif !important;
  font-size: 2vw;
  line-height: 1vw;
  font-weight: 700;
  letter-spacing: 0.2vw;
}
.deco-border {
  border-right: 2px solid #d57e8e;
  border-bottom: 2px solid #d57e8e;
}
</style>
<script>
import ContentContainer from "../components/ContentContainer.vue";
export default {
  name: "Main",
  components: { ContentContainer },
};
</script>

