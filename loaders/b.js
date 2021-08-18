function loaderB(content, map, meta) {
  console.log("normal loader B start");

  const json = JSON.parse(content);
  json.loaders.push(__filename);
  return JSON.stringify(json);
}

// pitch
// loaderB.pitch = function (remainingRequest, precedingRequest, data) {
//   console.log("loaderB pitch start");
//   console.log(remainingRequest, "\n pre>", precedingRequest, "\n data>", data);
// };

module.exports = loaderB;
