import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#242d48",
        secondary: "#191f32",
        accent: "#d57e8e",
        accent_2: "#ef7165",
        accent_3: "#faaa58",
        cta: "#78e0dc",
      },
    },
  },
});

