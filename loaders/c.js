function loaderC(content, map, meta) {
  console.log("normal loader C start");

  const json = JSON.parse(content);
  json.loaders.push(__filename);
  return JSON.stringify(json);
}

module.exports = loaderC;
