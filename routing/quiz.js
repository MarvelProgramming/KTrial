const router = require('express').Router();
const controller = require('../controllers/quiz');

router.get('/range', controller.getRangeOfQuizzes);

module.exports = router;
