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
        title: "Project 1",
        tech: ["JS", "HTML", "CSS"],
        description: "Description",
        media: [
          "http://placekitten.com/200/300",
          "http://placekitten.com/200/300",
          "http://placekitten.com/200/300",
        ],
        links: {
          github: {
            disabled: false,
            icon: "mdi-github",
            url: "https://placekitten.com/",
          },
          live: {
            disabled: true,
            icon: "mdi-open-in-new",
            url: "https://placekitten.com/",
          },
        },
      },
      {
        id: 1,
        title: "Project 2",
        tech: ["JS", "HTML", "CSS"],
        description: "Description",
        media: [
          "http://placekitten.com/200/300",
          "http://placekitten.com/200/300",
          "http://placekitten.com/200/300",
        ],
        links: {
          github: {
            disabled: true,
            icon: "mdi-github",
            url: "https://placekitten.com/",
          },
          live: {
            disabled: true,
            icon: "mdi-open-in-new",
            url: "https://placekitten.com/",
          },
        },
      },
      {
        id: 2,
        title: "Project 3",
        tech: ["JS", "HTML", "CSS"],
        description: "Description",
        media: [
          "http://placekitten.com/200/300",
          "http://placekitten.com/200/300",
          "http://placekitten.com/200/300",
        ],
        links: {
          github: {
            disabled: true,
            icon: "mdi-github",
            url: "https://placekitten.com/",
          },
          live: {
            disabled: true,
            icon: "mdi-open-in-new",
            url: "https://placekitten.com/",
          },
        },
      },
      {
        id: 3,
        title: "Project 4",
        tech: ["JS", "HTML", "CSS"],
        description: "Description",
        media: [
          "http://placekitten.com/200/300",
          "http://placekitten.com/200/300",
          "http://placekitten.com/200/300",
        ],
        links: {
          github: {
            disabled: true,
            icon: "mdi-github",
            url: "https://placekitten.com/",
          },
          live: {
            disabled: true,
            icon: "mdi-open-in-new",
            url: "https://placekitten.com/",
          },
        },
      },
      {
        id: 4,
        title: "Project 5",
        tech: ["JS", "HTML", "CSS"],
        description: "Description",
        media: [
          "http://placekitten.com/200/300",
          "http://placekitten.com/200/300",
          "http://placekitten.com/200/300",
        ],
        links: {
          github: {
            disabled: true,
            icon: "mdi-github",
            url: "https://placekitten.com/",
          },
          live: {
            disabled: true,
            icon: "mdi-open-in-new",
            url: "https://placekitten.com/",
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
          title: "about",
          icon: "mdi-account-outline",
          description:
            "Front End Developer with a Business background. Here are some true facts about me:",
          disabled: false,
        },
        {
          title: "projects",
          icon: "mdi-file-code-outline",
          description: "A sample of my work",
          disabled: false,
        },
        {
          title: "blog",
          icon: "mdi-post-outline",
          description: "Business and Technical subjects I write about",
          disabled: true,
        },
        {
          title: "gallery",
          icon: "mdi-palette-outline",
          description:
            "I love exploring my creativity by finding ways to combine art and technology.",
          disabled: true,
        },
        {
          title: "contact",
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

