//import our connection
const connection = require('./connection');

// create a function that reads from the cats table
// SELECT * FROM cats
const findAll = () => {
  // create a new Promise
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM cats', function(err, dbCatData) {
      if (err) {
        // this will throw to a .catch()
        return reject(err);
      }
      // this will throw to a .then()
      return resolve(dbCatData);
    });
  });
};

// find a cat by id
// SELECT * FROM cats WHERE id = ?
const findById = catId => {
  // create a new Promise
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM cats WHERE id = ?', [catId], function(err, dbCatData) {
      if (err) {
        // this will throw to a .catch()
        return reject(err);
      }
      // this will throw to a .then()
      return resolve(dbCatData);
    });
  });
};

// CREATE/INSERT
// INSERT INTO cats SET ? ({name: "catName"})
const create = catDataObj => {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO cats SET ?', [catDataObj], function(err, dbCatData) {
      if (err) {
        // this will throw to a .catch()
        return reject(err);
      }
      // this will throw to a .then()
      return resolve(dbCatData);
    });
  });
};

// UPDATE cats (set value of "sleepy" to true or false)
// UPDATE cats SET sleepy = ? WHERE id = ? ([true, 2])
const update = (sleepyValue, catId) => {
  return new Promise((resolve, reject) => {

    // set sleepyValue to boolean true/false
    sleepyValue = (sleepyValue === "true") 
      ? true : false;

    connection.query("UPDATE cats SET sleepy = ? WHERE id = ?", [sleepyValue, catId], function(err, dbCatData) {

      if (err) {
        return reject(err);
      }
      else if (dbCatData.changedRows === 0) {
        return reject({message: "You probably have the wrong ID"});
      }
      else {
        return resolve(dbCatData);
      }
    })
  })
}

// DELETE a cat
// DELETE FROM cats WHERE id = ?
const remove = (catId) => {
  return new Promise((resolve, reject) => {

    connection.query("DELETE FROM cats WHERE id = ?", [catId], function (err, dbCatData) {

      if (err) {
        return reject(err);
      }
      else if (dbCatData.affectedRows === 0) {
        return reject({ message: "You probably have the wrong ID" });
      }
      else {
        return resolve(dbCatData);
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
  remove
};
