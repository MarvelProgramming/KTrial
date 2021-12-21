const router = require('express').Router();
const controller = require('../controllers/quiz');

router.get('/range', controller.getRangeOfQuizzes);
router.post('/:id/grade', controller.gradeQuiz);
router.get('/questions/:id', controller.getQuestionById);
router.get('/:id', controller.getQuizById);
router.post('/', controller.createQuiz);

module.exports = router;
