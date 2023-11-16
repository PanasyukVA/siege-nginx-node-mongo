const context = require("../models");

exports.check = (req, res) => {
  const status = context.db.mongoose.connection.readyState === 1 ? 200: 500;
  res.status(status).send();
};