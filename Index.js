const m = bunny.metro.findByProps("updateLocale", "defineLocale");
const f = {
  LT: "h:mm A",
  LTS: "h:mm:ss A",
  L: "DD/MM/YYYY",
  LL: "D MMMM YYYY",
  LLL: "D MMMM YYYY h:mm A",
  LLLL: "dddd, D MMMM YYYY h:mm A"
};

export default {
  onLoad() {
    ["en", "en-us", "en-gb"].forEach(l => m.updateLocale(l, { longDateFormat: f }));
    m.locale(m.locale());
  },
  onUnload() {}
};
