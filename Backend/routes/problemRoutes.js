const express = require('express');
const {
  addProblem,
  getAllProblems,
  getProblemById
} = require('../controllers/problemController');

const router = express.Router();

router.post('/', addProblem);

router.get('/', getAllProblems);


router.get('/:id', getProblemById);

module.exports = router;
