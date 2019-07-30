module.exports = (api) => {
  api.cache(true)

  const presets = ["@babel/typescript", "@babel/preset-react"];

  return {
    presets
  };
}
