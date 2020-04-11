const { test } = require("ava");
const { ago } = require("../index");

const timestamp = new Date();

ago.locale = "es";

test("just now", (t) => {
  t.is(ago(timestamp), "ahora");
});

test("minute", (t) => {
  const minute = new Date(timestamp.valueOf() - 60 * 1000);
  const minute2 = new Date(timestamp.valueOf() - (60 * 1000 + 5000));
  t.is(ago(minute), "hace un minuto");
  t.is(ago(minute2), "hace un minuto");
});

test("minute future", (t) => {
  const timestamp = new Date();
  const minute = new Date(timestamp.valueOf() + 60 * 1000);
  const minute2 = new Date(timestamp.valueOf() + (60 * 1000 + 5000));
  t.is(ago(minute), "en un minuto");
  t.is(ago(minute2), "en un minuto");
});

test("minutes", (t) => {
  const minutes = new Date(timestamp.valueOf() - 2 * 60 * 1000);
  const minutes2 = new Date(timestamp.valueOf() - 20 * 60 * 1000);
  const minutes3 = new Date(timestamp.valueOf() - 45 * 60 * 1000);
  t.is(ago(minutes), "hace 2 minutos");
  t.is(ago(minutes2), "hace 20 minutos");
  t.is(ago(minutes3), "hace 45 minutos");
});

test("minutes future", (t) => {
  const timestamp = new Date();
  const minutes = new Date(timestamp.valueOf() + 2 * 60 * 1000);
  const minutes2 = new Date(timestamp.valueOf() + 20 * 60 * 1000);
  const minutes3 = new Date(timestamp.valueOf() + 45 * 60 * 1000);
  t.is(ago(minutes), "en 2 minutos");
  t.is(ago(minutes2), "en 20 minutos");
  t.is(ago(minutes3), "en 45 minutos");
});

test("hour", (t) => {
  const underHour = new Date(timestamp.valueOf() - 50 * 60 * 1000);
  const hour = new Date(timestamp.valueOf() - 60 * 60 * 1000);
  t.is(ago(underHour), "hace una hora");
  t.is(ago(hour), "hace una hora");
});

test("hour future", (t) => {
  const timestamp = new Date();
  const withinHour = new Date(timestamp.valueOf() + 50 * 60 * 1000);
  const hour = new Date(timestamp.valueOf() + 60 * 60 * 1000);
  t.is(ago(withinHour), "en una hora");
  t.is(ago(hour), "en una hora");
});

test("hours", (t) => {
  const hours = new Date(timestamp.valueOf() - 2 * 60 * 60 * 1000);
  const hours2 = new Date(timestamp.valueOf() - 19 * 60 * 60 * 1000);
  t.is(ago(hours), "hace 2 horas");
  t.is(ago(hours2), "hace 19 horas");
});

test("yesterday", (t) => {
  const yesterday = new Date(timestamp.valueOf() - 20 * 60 * 60 * 1000);
  t.is(ago(yesterday), "ayer");
});

test("day future", (t) => {
  const timestamp = new Date();
  const yesterday = new Date(timestamp.valueOf() + 20 * 60 * 60 * 1000);
  t.is(ago(yesterday), "mañana");
});

test("days", (t) => {
  const days = new Date(timestamp.valueOf() - 2 * 24 * 60 * 60 * 1000);
  const days2 = new Date(timestamp.valueOf() - 5 * 24 * 60 * 60 * 1000);
  t.is(ago(days), "hace 2 días");
  t.is(ago(days2), "hace 5 días");
});

test("days future", (t) => {
  const timestamp = new Date();
  const days = new Date(timestamp.valueOf() + 2 * 24 * 60 * 60 * 1000);
  const days2 = new Date(timestamp.valueOf() + 5 * 24 * 60 * 60 * 1000);
  t.is(ago(days), "en 2 días");
  t.is(ago(days2), "en 5 días");
});

test("week", (t) => {
  const week = new Date(timestamp.valueOf() - 6 * 24 * 60 * 60 * 1000);
  t.is(ago(week), "la semana pasada");
});

test("week future", (t) => {
  const timestamp = new Date();
  const week = new Date(timestamp.valueOf() + 6 * 24 * 60 * 60 * 1000);
  t.is(ago(week), "la proxima semana");
});

test("weeks", (t) => {
  const weeks = new Date(timestamp.valueOf() - 2 * 7 * 24 * 60 * 60 * 1000);
  const weeks2 = new Date(timestamp.valueOf() - 3 * 7 * 24 * 60 * 60 * 1000);
  t.is(ago(weeks), "hace 2 semanas");
  t.is(ago(weeks2), "hace 3 semanas");
});

test("weeks future", (t) => {
  const timestamp = new Date();
  const weeks = new Date(timestamp.valueOf() + 2 * 7 * 24 * 60 * 60 * 1000);
  const weeks2 = new Date(timestamp.valueOf() + 3 * 7 * 24 * 60 * 60 * 1000);
  t.is(ago(weeks), "en 2 semanas");
  t.is(ago(weeks2), "en 3 semanas");
});

test("month", (t) => {
  const month = new Date(timestamp.valueOf() - 4 * 7 * 24 * 60 * 60 * 1000);
  const month2 = new Date(timestamp.valueOf() - 30 * 24 * 60 * 60 * 1000);
  t.is(ago(month), "el mes pasado");
  t.is(ago(month2), "el mes pasado");
});

test("month future", (t) => {
  const timestamp = new Date();
  const month = new Date(timestamp.valueOf() + 4 * 7 * 24 * 60 * 60 * 1000);
  const month2 = new Date(timestamp.valueOf() + 30 * 24 * 60 * 60 * 1000);
  t.is(ago(month), "el proximo mes");
  t.is(ago(month2), "el proximo mes");
});

test("months", (t) => {
  const months = new Date(timestamp.valueOf() - 2 * 30 * 24 * 60 * 60 * 1000);
  const months2 = new Date(timestamp.valueOf() - 10 * 30 * 24 * 60 * 60 * 1000);
  t.is(ago(months), "hace 2 meses");
  t.is(ago(months2), "hace 10 meses");
});

test("months future", (t) => {
  const timestamp = new Date();
  const months = new Date(timestamp.valueOf() + 2 * 30 * 24 * 60 * 60 * 1000);
  const months2 = new Date(timestamp.valueOf() + 10 * 30 * 24 * 60 * 60 * 1000);
  t.is(ago(months), "en 2 meses");
  t.is(ago(months2), "en 10 meses");
});

test("year", (t) => {
  const year = new Date(timestamp.valueOf() - 350 * 24 * 60 * 60 * 1000);
  const year2 = new Date(timestamp.valueOf() - 1.5 * 360 * 24 * 60 * 60 * 1000);
  t.is(ago(year), "el año pasado");
  t.is(ago(year2), "el año pasado");
});

test("year future", (t) => {
  const timestamp = new Date();
  const year = new Date(timestamp.valueOf() + 350 * 24 * 60 * 60 * 1000);
  const year2 = new Date(timestamp.valueOf() + 1.5 * 360 * 24 * 60 * 60 * 1000);
  t.is(ago(year), "el proximo año");
  t.is(ago(year2), "el proximo año");
});

test("years", (t) => {
  const years = new Date(timestamp.valueOf() - 2 * 365 * 24 * 60 * 60 * 1000);
  const years2 = new Date(timestamp.valueOf() - 20 * 365 * 24 * 60 * 60 * 1000);
  const years3 = new Date(
    timestamp.valueOf() - 100 * 365 * 24 * 60 * 60 * 1000
  );
  const years4 = new Date(
    timestamp.valueOf() - 100000 * 365 * 24 * 60 * 60 * 1000
  );
  t.is(ago(years), "hace 2 años");
  t.is(ago(years2), "hace 20 años");
  t.is(ago(years3), "hace 100 años");
  t.is(ago(years4), "hace 100000 años");
});
test("years future", (t) => {
  const timestamp = new Date();
  const years = new Date(timestamp.valueOf() + 2 * 365 * 24 * 60 * 60 * 1000);
  const years2 = new Date(timestamp.valueOf() + 20 * 365 * 24 * 60 * 60 * 1000);
  const years3 = new Date(
    timestamp.valueOf() + 100 * 365 * 24 * 60 * 60 * 1000
  );
  const years4 = new Date(
    timestamp.valueOf() + 100000 * 365 * 24 * 60 * 60 * 1000
  );
  t.is(ago(years), "en 2 años");
  t.is(ago(years2), "en 20 años");
  t.is(ago(years3), "en 100 años");
  t.is(ago(years4), "en 100000 años");
});
