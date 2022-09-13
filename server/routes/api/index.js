const router = require('express').Router();

const userRoutes = require('./user-routes');
const quizRoutes = require('./quiz-routes');
const petRoutes = require('./pet-routes');


router.use('/users',userRoutes);
router.use('/quiz', quizRoutes);
router.use('/pets', petRoutes);

module.exports = router;