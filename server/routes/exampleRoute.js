const express = require('express');

const exampleController = require('../controllers/exampleController');

const router = express.Router();

router.get('/',
  exampleController.getPeople,
  (req, res) => res.status(200).json(res.locals.people)
);

module.exports = router;
