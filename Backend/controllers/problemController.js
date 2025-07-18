const Problem = require('../models/Problem');

exports.addProblem = async (req, res) => {
  const { title, statement, constraints, testCases } = req.body;

  try {
    const newProblem = new Problem({
      title,
      statement,
      constraints,
      testCases,
    });

    await newProblem.save();
    res.status(201).json({ message: 'Problem added successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error adding problem' });
  }
};

exports.getAllProblems = async (req, res) => {
  try {
    const problems = await Problem.find().select('title');
    res.json(problems);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch problems' });
  }
};

exports.getProblemById = async (req, res) => {
  try {
    const problem = await Problem.findById(req.params.id);
    if (!problem) return res.status(404).json({ message: 'Problem not found' });

    res.json(problem);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching problem' });
  }
};
