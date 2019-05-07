// import our cats model
const cats = require("../models/cats");

module.exports = app => {

  // GET all cats
  app.get("/api/cats", function(req, res) {
    cats.findAll()
      .then(dbCatData => res.json(dbCatData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  // create/POST a new cat
  app.post("/api/cats", function(req, res) {
    // pass req.body into create method 
    // req.body => {name: "catty cat"}
    cats.create(req.body)
      .then(dbCatData => res.json(dbCatData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });


  // get a cat by its id
  app.get("/api/cats/:id", function(req, res) {
    cats.findById(req.params.id)
      .then(dbCatData => res.json(dbCatData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  // PUT/update a cat's sleepy to true/false by id
  app.put("/api/cats/:id", function(req, res) {
    // req.body => {sleepy: true} || {sleepy : false}
    cats.update(req.body.sleepy, req.params.id)
      .then(dbCatData => res.json(dbCatData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  // DELETE a cat by its id
  app.delete("/api/cats/:id", function(req, res) {
    cats.remove(req.params.id)
      .then(dbCatData => res.json(dbCatData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });
}
