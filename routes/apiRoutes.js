const mongoose = require("mongoose");
const { BooksCollection } = require("../models");

module.exports = function (app) {
    app.post("/api/save", ({body}, res) => {
        console.log("Saving");
        BooksCollection.create(body)
        .then(book => res.json(book))
    })
    
    app.delete("/api/delete/:id", (req, res) => {
        console.log("Deleting");
    })
}