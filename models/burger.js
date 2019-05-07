//import our connection
const connection = require('./connection');

// create a function that reads from the burgers table
// SELECT * FROM burgers
const findAll = () => {
  // create a new Promise
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM burgers', function (err, dbBurger) {
      if (err) {
        // this will throw to a .catch()
        return reject(err);
      }
      // this will throw to a .then()
      return resolve(dbBurger);
    });
  });
};

// find a cat by id
// SELECT * FROM cats WHERE id = ?
const findById = burgerID => {
  // create a new Promise
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM burgers WHERE id = ?', [burgerID], function (err, dbBurger) {
      if (err) {
        // this will throw to a .catch()
        return reject(err);
      }
      // this will throw to a .then()
      return resolve(dbBurger);
    });
  });
};

// CREATE/INSERT
// INSERT INTO cats SET ? ({name: "burgerName"})
const create = burgerObj => {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO burgers SET ?', [burgerObj], function (err, dbBurger) {
      if (err) {
        // this will throw to a .catch()
        return reject(err);
      }
      // this will throw to a .then()
      return resolve(dbBurger);
    });
  });
};


const update = (eatenValue, burgerID) => {
  return new Promise((resolve, reject) => {

    eatenValue = (eatenValue === "false") ?
      false : true;

    connection.query("UPDATE burgers SET eaten = ? WHERE id = ?", [eatenValue, burgerID], function (err, dbBurger) {

      if (err) {
        return reject(err);
      } else if (dbBurger.changedRows === 0) {
        return reject({
          message: "You probably have the wrong ID"
        });
      } else {
        return resolve(dbBurger);
      }
    })
  })
}

// export all of our new functions as methods of an object
module.exports = {
  findAll,
  findById,
  create,
  update,
};