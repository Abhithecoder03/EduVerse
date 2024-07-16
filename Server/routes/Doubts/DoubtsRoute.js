const express = require('express');
const router = express.Router();
const {
  addDoubt,
  addResponse,
  addFollowUpResponse,
  getDoubts,
} = require('../../controllers/Doubts/DoubtsController');

// Route to get all doubts
router.get('/alldoubts', getDoubts);

// Route to add a new doubt
router.post('/adddoubts', addDoubt);

// Route to add a response to a doubt
router.post('/doubts/:doubtId/response', addResponse);

// Route to add a follow-up response to a doubt response
router.post('/doubts/:doubtId/response/:responseId/followup', addFollowUpResponse);

module.exports = router;
