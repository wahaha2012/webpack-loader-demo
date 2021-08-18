// main
function loaderA(content, map, meta) {
  console.log("normal loader A start");
  // debugger;
  const json = JSON.parse(content);
  json.loaders.push(__filename);
  return JSON.stringify(json);
}

// pitch
// loaderA.pitch = function (remainingRequest, precedingRequest, data) {
//   // debugger;
//   console.log("loaderA pitch start");
//   console.log(remainingRequest, "\n pre>", precedingRequest, "\n data>", data);
// };

module.exports = loaderA;
