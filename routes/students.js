const express = require('express');
const router = express.Router();
const { getStudentStats, getWorstHomeworkScore } = require('../controllers/students');


router.get('/stats', getStudentStats);
router.get('/worst-homework', getWorstHomeworkScore);

module.exports = router;