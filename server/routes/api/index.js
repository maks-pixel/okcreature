const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const quizRoutes = require('./quiz-routes.js');
const petRoutes = require('./pet-routes.js')

router.use('/users', userRoutes);
router.use('/quizes', quizRoutes);
router.use('/pets', petRoutes);

module.exports = router;