const context = require("../models");
const Tutorial = context.db.tutorials;

// Create and Save a new Tutorial.
exports.create = (req, res) => {
  const tutorial = new Tutorial({
    title: 'siege-title',
    description: 'siege-description',
    published: true
  });

  tutorial
    .save(tutorial)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};