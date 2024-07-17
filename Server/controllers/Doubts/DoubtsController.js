const Doubt = require('../../models/Doubts');

// Get all doubts
const getDoubts = async (req, res) => {
  try {
    const doubts = await Doubt.find({}).populate('student').populate({
      path: 'responses.teacher', // Nested populate for responses
      select: 'fName lName userName email role', // Select only the required fields of the teacher
    });
    res.json(doubts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new doubt
const addDoubt = async (req, res) => {
  const { title, description, student } = req.body;

  const newDoubt = new Doubt({
    title,
    description,
    student,
  });

  try {
    const savedDoubt = await newDoubt.save();
    res.status(201).json(savedDoubt);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Add a response to a doubt
const addResponse = async (req, res) => {
  const { doubtId } = req.params;
  const { responseText, teacher } = req.body;

  try {
    const doubt = await Doubt.findById(doubtId);
    if (!doubt) {
      return res.status(404).json({ message: 'Doubt not found' });
    }

    const newResponse = {
      responseText,
      teacher,
    };

    doubt.responses.push(newResponse);
    await doubt.save();

    res.status(201).json(doubt);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Add a follow-up response to a doubt response
const addFollowUpResponse = async (req, res) => {
  const { doubtId, responseId } = req.params;
  const { responseText, student } = req.body;

  try {
    const doubt = await Doubt.findById(doubtId);
    if (!doubt) {
      return res.status(404).json({ message: 'Doubt not found' });
    }

    const response = doubt.responses.id(responseId);
    if (!response) {
      return res.status(404).json({ message: 'Response not found' });
    }

    const newFollowUpResponse = {
      responseText,
      student,
    };

    response.responses.push(newFollowUpResponse);
    await doubt.save();

    res.status(201).json(doubt);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getDoubts,
  addDoubt,
  addResponse,
  addFollowUpResponse,
};
