const noteArray = require("../db/noteDB.js");
var noteData = require("../db/noteDB.js");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    res.json(noteData);
  });

  app.post("/api/notes", function (req, res) {
    noteData.push(req.body);
  });

  app.post("/api/clear", function (req, res) {
    // Empty out the arrays of data
    noteArray.length = 0;
  });
};
