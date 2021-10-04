// https://opentdb.com/api.php?amount=10

const Cache = require("@11ty/eleventy-cache-assets");

module.exports = async function() {
  let url = "https://opentdb.com/api.php?amount=10";

  /* This returns a promise */
  return Cache(url, {
    duration: "1d", // save for 1 day
    type: "json"    // we’ll parse JSON for you
  });
};