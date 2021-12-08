const Mustache = require("mustache");

const siteContent = require("../content.json");
const view = {};

const output = Mustache.render("", view);
