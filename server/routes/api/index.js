const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const petRoutes = require('./pet-routes.js');
const quizRoutes = require('./quiz-routes.js');

router.use('/users',userRoutes);
router.use('/pets', petRoutes);
router.use('/quizzes', quizRoutes);


module.exports = router;