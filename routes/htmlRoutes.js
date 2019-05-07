// import our cats model
const cats = require("../models/cats");

// export our route definitions as a function
module.exports = (app) => {

  app.get("/", function(req, res) {

    // use cat.findAll
    cats
      .findAll()
      // if we get to resolve()
      .then(dbCatData => {
        res.render("index", {catData: dbCatData})
      })
      // if we get to reject()
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });
}