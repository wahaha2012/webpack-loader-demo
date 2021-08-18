function loaderA(content, map, meta) {
  console.log("normal loader A start");

  const json = JSON.parse(content);
  json.loaders.push(__filename);
  return JSON.stringify(json);
}

module.exports = loaderA;
