const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const context = {};
context.db = {};
context.db.mongoose = mongoose;
context.db.url = dbConfig.url;
context.db.tutorials = require("./tutorial.model.js")(mongoose);

module.exports = context;
