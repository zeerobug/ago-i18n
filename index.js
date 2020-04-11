/*

Usage:

var ago = require('s-ago');

var now = new Date();
var yesterday = new Date(now.getTime() - (24 * 60 * 60 * 1000));
var hoursAgo = new Date(now.getTime() - (6 * 60 * 60 * 1000));

ago(now); // 'just now'
ago(yesterday); // 'yesterday'
ago(hoursAgo); // '6 hours ago'

*/
i18n = require("i18n");
var units;

i18n.configure({
  locales: ["en", "es"],
  directory: __dirname + "/locales",
  defaultLocale: "en",
  objectNotation: true,
});

function getUnits(locale) {
  console.log("Redefining units!");
  i18n.setLocale(locale ? locale : "en");
  let units = [
    {
      max: 2760000,
      value: 60000,
      ...i18n.__("%s minute"),
    }, // max: 46 minutes
    {
      max: 72000000,
      value: 3600000,
      ...i18n.__("%s hour"),
    }, // max: 20 hours
    {
      max: 518400000,
      value: 86400000,
      ...i18n.__("%s day"),
    }, // max: 6 days
    {
      max: 2419200000,
      value: 604800000,
      ...i18n.__("%s week"),
    }, // max: 28 days
    {
      max: 28512000000,
      value: 2592000000,
      ...i18n.__("%s month"),
    }, // max: 11 months
  ];
  return units;
}

function format(diff, divisor, unit, isInTheFuture) {
  var val = Math.round(Math.abs(diff) / divisor);
  //if (isInTheFuture) return val <= 1 ? future : "in " + val + " " + unit + "s";
  //return val <= 1 ? past : val + " " + unit + "s ago";
  timeLine = isInTheFuture ? "future" : "past";
  return i18n.__n("%s " + unit + "." + timeLine, val);
}

function ago(date) {
  if (units == undefined) units = getUnits(ago.locale);
  const diff = Date.now() - date.getTime();
  // less than a minute
  if (Math.abs(diff) < 60000) return i18n.__("now");

  for (var i = 0; i < units.length; i++) {
    if (Math.abs(diff) < units[i].max) {
      return format(diff, units[i].value, units[i].name, diff < 0);
    }
  }

  // `year` is the final unit.
  // same as:
  //  {
  //    max: Infinity,
  //    value: 31536000000,
  //    name: 'year',
  //    past: 'last year'
  //  }
  return format(diff, 31536000000, "year", diff < 0);
}

exports.ago = ago;
