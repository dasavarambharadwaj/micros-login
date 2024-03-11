const path = require("path");

module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
  },
};
