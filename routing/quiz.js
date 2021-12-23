const router = require('express').Router();
const controller = require('../controllers/quiz');

router.get('/range', controller.getRangeOfQuizzes);
router.get('/questions/:id', controller.getQuestionById);
router.get('/:id', controller.getQuizById);
router.put('/:id', controller.rateQuizById);
router.delete('/:id', controller.deleteQuiz);
router.post('/:id/grade', controller.gradeQuiz);
router.post('/', controller.createQuiz);

module.exports = router;
