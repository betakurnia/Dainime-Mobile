const proxy = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(
    "/api",
    proxy({
      target: "http://192.168.18.17:5000",
      changeOrigin: true
    })
  );
};
