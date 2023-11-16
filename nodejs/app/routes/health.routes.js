module.exports = app => {
  const health = require("../controllers/health.controller.js");

  var router = require("express").Router();

  router.get("/", health.check);

  app.use("/api/health/check", router);
};
