function loaderC(content, map, meta) {
  console.log("normal loader C start");

  const json = JSON.parse(content);
  json.loaders.push(__filename);
  return JSON.stringify(json);
}

// pitch
// loaderC.pitch = function (remainingRequest, precedingRequest, data) {
//   console.log("loaderC pitch start");
//   console.log(remainingRequest, "\n pre>", precedingRequest, "\n data>", data);
// };

module.exports = loaderC;
