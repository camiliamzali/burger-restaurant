// import our burger model
const burger = require("../models/burger");

module.exports = app => {

  // GET all burger
  app.get("/api/burger", function (req, res) {
    burger.findAll()
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  // create/POST a new cat
  app.post("/api/burger", function (req, res) {
    // pass req.body into create method 
    // req.body => {name: "catty cat"}
    burger.create(req.body)
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });


  // get a cat by its id
  app.get("/api/burger/:id", function (req, res) {
    burger.findById(req.params.id)
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  // PUT/update a cat's sleepy to true/false by id
  app.put("/api/burger/:id", function (req, res) {
    // req.body => {sleepy: true} || {sleepy : false}
    burger.update(req.body.eaten, req.params.id)
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });
}