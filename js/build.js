const Mustache = require("mustache");

const siteContent = require("../content.json");
const content = JSON.parse(siteContent);

const view = {
  content,
  title: function () {
    return content.firstName + " " + content.lastName + "Portfolio";
  },
};

const output = Mustache.render("", view);
