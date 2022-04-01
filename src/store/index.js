import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const about = {
  state: () => ({
    about: [
      {
        id: 0,
        title: "Constantly Learning",
        description: "Write something about myself",
      },
      {
        id: 1,
        title: "Risk Taker",
        description:
          "Diving into the deep end with the expectation of making mistakes and learning from them. Love to identify opportunities and pursue them.",
      },
      {
        id: 2,
        title: "'Multi-lingual'",
        description: "Speaks tech and business",
      },
      {
        id: 3,
        title: "Social Chameleon",
        description: "Title is kinda lame but concept is good.",
      },
    ],
  }),
  getters: {
    getAboutContent(state) {
      return state.about;
    },
  },
};

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
  getters: {
    getProjects(state) {
      return state.projects;
    },
  },
};

const blog = {
  state: () => ({
    articles: [
      {
        id: 0,
        title: "Placeholder - 1",
        img: "http://placekitten.com/200/300",
        text: "Placeholder text for the article",
        tags: ["list", "of", "topic", "tags"],
      },
      {
        id: 1,
        title: "Placeholder - 2",
        img: "http://placekitten.com/200/300",
        text: "Placeholder text for the article",
        tags: ["list", "of", "topic", "tags"],
      },
      {
        id: 2,
        title: "Placeholder - 3",
        img: "http://placekitten.com/200/300",
        text: "Placeholder text for the article",
        tags: ["list", "of", "topic", "tags"],
      },
    ],
  }),
  getters: {
    getArticles(state) {
      return state.articles;
    },
  },
};

const gallery = {
  state: () => ({
    artProjects: [
      {
        id: 0,
        title: "CSS Art - 1",
        description: "Created with Pure CSS. Inspired by: Something.",
        link: "http://placekitten.com/200/300",
      },
      {
        id: 1,
        title: "CSS Art - 2",
        description: "Created with Pure CSS. Inspired by: Something.",
        link: "http://placekitten.com/200/300",
      },
      {
        id: 2,
        title: "CSS Art - 3",
        description: "Created with Pure CSS. Inspired by: Something.",
        link: "http://placekitten.com/200/300",
      },
    ],
  }),
  getters: {
    getArt(state) {
      return state.artProjects;
    },
  },
};

export default new Vuex.Store({
  state: {
    socials: {
      linkedIn: {
        icon: "mdi-linkedin",
        link: "https://www.linkedin.com/in/dariaanikanova/",
      },
      github: {
        icon: "mdi-github",
        link: "https://github.com/DariaAnikanova",
      },
      twitter: {
        icon: "mdi-twitter",
        link: "https://twitter.com/DariaNovaDev",
      },
    },
    contentTabs: {
      tabs: [
        {
          title: "About",
          icon: "mdi-account-outline",
          description: "Here are some true facts about me:",
          disabled: false,
        },
        {
          title: "Projects",
          icon: "mdi-file-code-outline",
          description: "A sample of my work",
          disabled: false,
        },
        {
          title: "Blog",
          icon: "mdi-post-outline",
          description: "Business and Technical subjects I write about",
          disabled: false,
        },
        {
          title: "Gallery",
          icon: "mdi-palette-outline",
          description:
            "I love exploring my creativity by finding ways to combine art and technology.",
          disabled: false,
        },
        {
          title: "Contact",
          icon: "mdi-email-outline",
          description: "Reach out to me if you're interested in collaborating!",
          disabled: false,
        },
      ],
    },
  },
  getters: {
    getContentTabs(state) {
      return state.contentTabs.tabs;
    },
    getSocials(state) {
      return state.socials;
    },
  },
  modules: {
    projects: projects,
    about: about,
    gallery: gallery,
    blog: blog,
  },
});

