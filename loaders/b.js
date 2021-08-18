function loaderB(content, map, meta) {
  console.log("normal loader B start");

  const json = JSON.parse(content);
  json.loaders.push(__filename);
  return JSON.stringify(json);
}

module.exports = loaderB;
