const db = require('../models/model');

const exampleController = {};

exampleController.getPeople = (req, res, next) => {
  // homeworld, species, film
  const search = `SELECT * FROM project`;

  db
    .query(search)
    .then(response => { 
      // console.log(response.rows[0]);
      res.locals.people = response.rows;
      return next();
    })
    .catch(err => next({
      log: 'getPeople failed to load data',
      message: { err: 'no response received' },
    }));

};

module.exports = exampleController;