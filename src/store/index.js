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

const resume = {
  state: () => ({
    title: "Front End Developer",
    summary: {
      label: "Professional Summary",
      strengths: [
        "Well-rounded Front-End Developer, experienced working with diverse teams to design, validate and build web applications in both technical and business-oriented roles for 3+ years",
        "Proficient at delivering technical projects that encompass business requirements and client needs while working within budget, time and technical constraints",
        "Adept at utilizing project management strategies and agile methodologies to effectively plan and deliver technical projects while maintaining and fostering stakeholder and client relationships",
        "Highly flexible in response to changing requirements",
      ],
      technical: {
        label: "Technical Skills",
        frontend: {
          label: "Front End Development",
          skills: ["Vue.js", "Javascript", "HTML", "CSS", "SASS", "Node.js"],
        },
        dataEngineering: {
          label: "Data Engineering",
          skills: [
            "Google Apps Script",
            "Google Sheets",
            "Microsoft Excel",
            "Excel VBA",
            "Power BI",
            "SQL",
          ],
        },
        apis: {
          label: "APIs",
          skills: ["REST", "GraphQL"],
        },
        design: {
          label: "UI and Design",
          skills: ["Vuetify, Adobe Photoshop", "Adobe Illustrator", "Figma"],
        },
        versioningAndProd: {
          label: "Versioning and Productivity",
          skills: ["Git", "Trello", "Notion"],
        },
        accessibility: {
          label: "Accessibility",
          skills: ["Axe Dev Tools"],
        },
      },
    },
    professionalSkills: {
      webDevelopment: {
        label: "Web Development",
        skills: [
          "Used responsive design to develop high quality, intuitive, functional, and user-friendly applications based on requirements",
          "Tested sites for cross-compatibility between browsers and devices to ensure consistency of function and design",
          "Tested and optimized sites for web accessibility using tools that enforce compliance with WCAG 2.1",
          "Implemented modern SEO and web principles and best practices where applicable",
        ],
      },
      projectManagement: {
        label: "Project Management",
        skills: [
          "Gathered requirements based on scope, timeline, budget, and business needs to ensure clear expectations of deliverables",
          "Articulated complex ideas to clients and stakeholders, provided updates on progress, and facilitated problem solving",
          "Created and presented status reports and demonstrations at regular milestones and integrated ongoing feedback into project deliverables to ensure client and stakeholder satisfaction",
          "Created timelines and milestones to keep work progress on schedule and ensured timelines were adhered to",
          "Implemented agile techniques such as SCRUM and Kanban to optimize workflow",
        ],
      },
      data: {
        label: "Data Analytics & Reporting",
        skills: [
          "Conducted and evaluated market and competitor research to identify potential business opportunities and threats to achieve and maintain competitive advantage",
          "Drove continuous improvement by conducting user testing to identify required changes to features, apps and websites",
          "Identified and performed ETL on relevant open data sources and research for further analysis and utilization",
          "Analyzed data to generate business and operational reports for company stakeholders to support decision making",
        ],
      },
      relationshipMngmt: {
        label: "Stakeholder & Client Relationship Management",
        skills: [
          "Communicated regularly with stakeholders regarding project updates, identified issues, and changes in scope to ensure projects remain on track and meet client expectations",
          "Researched, gathered and analyzed relevant data and project requirements to determine technologies and work direction that best fit project and business needs",
        ],
      },
    },
    education: {
      label: "Education",
      degree: "Bachelor of Commerce",
      school: "Ryerson University, Ted Rogers School of Management",
      graduated: "2018",
      major: "Business Management - Entrepreneur & Strategy",
      minor: "Marketing",
    },
  }),
};

export default new Vuex.Store({
  state: {
    firstName: "Daria",
    lastName: "Anikanova",
    subtitle: "Front End Developer",
    portfolio: "https://darianova.dev",
    portfolioLabel: "darianova.dev",
    about:
      " Placeholder: Front-End Developer, experienced working with diverse teams to design, validate and build web applications in both technical and business-oriented roles for 3+ years",
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
    resume: resume,
  },
});
