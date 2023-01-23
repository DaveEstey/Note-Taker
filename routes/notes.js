const notes = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const { readFromFile, readAndAppend } = require("../helpers/fsUtils");

notes.get("/", (req, res) => readFromFile("./db/db.json")
  .then((data) => res.json(JSON.parse(data)))
);

notes.post("/", (req, res) => {
  const { title, text } = req.body;

  if (req.body) {
    const newNote = { title, text, uuid: uuidv4() };

    readAndAppend(newNote, "./db/db.json");

    res.json(`Tip added successfully 🚀`);
  } else {
    res.error('Error in adding tip');
  }
});

module.exports = notes;




