const { ago } = require("./index");
const i18n = require("i18n");

i18n.configure({
  locales: ["en", "es"],
  directory: __dirname + "/locales",
  defaultLocale: "en",
  objectNotation: true,
});

i18n.setLocale("en");
let unit = "year";
let timeLine = "future";
let val = 1;
let ret = i18n.__n("%s " + unit + "." + timeLine, val);
console.log(ret);
