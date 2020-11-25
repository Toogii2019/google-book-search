const mongoose = require("mongoose");
const { BooksCollection } = require("../models");

mongoose.connect(process.env.DBURI || "mongodb://localhost/lessondb", {
  useNewUrlParser: true,
  useFindAndModify: false
});

module.exports = function (app) {
    app.post("/api/save", ({body}, res) => {
        console.log("Saving");
        BooksCollection.create(body)
        .then(book => res.json(book))
    })
    
    app.get("/api/books", (req, res) => {
        BooksCollection.find()
        .then(books => {
            res.json(books)
        })
    });

    app.delete("/api/delete/:id", (req, res) => {
        console.log("Deleting");
        BooksCollection.deleteOne({"onlineId": req.params.onlineId})
        .then(book => {
            res.json(book);
            })
            .catch(err => {
            res.json(err);
            });
    })
}