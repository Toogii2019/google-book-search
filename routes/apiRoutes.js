const axios = require('axios');

const mongoose = require("mongoose");
const { BooksCollection } = require("../models");

mongoose.connect(process.env.DBURI || "mongodb://localhost/lessondb", {
  useNewUrlParser: true,
  useFindAndModify: false
});

module.exports = function (app) {

    app.get("/api/getbooksonline", (req, res) => {
        const APIURL = "https://www.googleapis.com/books/v1/volumes?q=";
        const key = `:keyes&key=${BooksAPIKey}`;
        const completeUrl = APIURL + searchStr.split(" ").join("+") + key;
        axios.get(completeUrl)
        .then(res => res.json(res.data.items))
    }) 

    app.post("/api/save", ({body}, res) => {
        BooksCollection.create(body)
        .then(book => res.json(book))
    })
    
    app.get("/api/books", (req, res) => {
        BooksCollection.find()
        .then(books => {
            res.json(books)
        })
    });

    app.delete("/api/delete/:onlineId", (req, res) => {
        BooksCollection.deleteOne({"onlineId": req.params.onlineId})
        .then(book => {
            res.json(book);
            })
            .catch(err => {
            res.json(err);
            });
    })
}