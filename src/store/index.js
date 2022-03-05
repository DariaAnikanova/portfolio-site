import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const projects = {
  state: () => ({
    projects: [
      {
        id: 0,
        projectName: "Project 1",
        projectDescription: "Description",
        tech: ["Vue.js", "CSS", "SCSS"],
        media: ["pic1", "pic2", "pic3"],
        Links: {
          Github: {
            Private: true,
            Source: "url",
          },
        },
      },
      {
        id: 1,
        ProjectName: "Project 2",
        Description: "Description",
        Media: ["pic", "pic2", "pic3"],
        Links: {
          Github: {
            Private: true,
            Source: "url",
          },
        },
      },
      {
        id: 2,
        ProjectName: "Project 3",
        Description: "Description",
        Media: ["pic", "pic2", "pic3"],
        Links: {
          Github: {
            Private: true,
            Source: "url",
          },
        },
      },
      {
        id: 3,
        ProjectName: "Project 4",
        Description: "Description",
        Media: ["pic", "pic2", "pic3"],
        Links: {
          Github: {
            Private: true,
            Source: "url",
          },
        },
      },
      {
        id: 4,
        ProjectName: "Project 5",
        Description: "Description",
        Media: ["pic", "pic2", "pic3"],
        Links: {
          Github: {
            Private: true,
            Source: "url",
          },
        },
      },
    ],
  }),
};

export default new Vuex.Store({
  state: {
    firstName: "Daria",
    lastName: "Anikanova",
    subtitle: "Front End Developer",
    about: "lorem ipsum",
    contact: {
      email: {
        icon: "fas fa-envelope-square",
        link: "contact@darianova.dev",
      },
      linkedIn: {
        icon: "fab fa-linkedin",
        link: "https://www.linkedin.com/in/dariaanikanova/",
      },
      github: {
        icon: "fab fa-github-square",
        link: "https://github.com/DariaAnikanova",
      },
      twitter: {
        icon: "fab fa-twitter-square",
        link: "https://twitter.com/DariaNovaDev",
      },
    },
  },
  mutations: {},
  actions: {},
  modules: {
    projects: projects,
  },
});
