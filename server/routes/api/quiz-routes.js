const router = require('express').Router();
const { User, Pet, Quiz } = require('../../Models');

//get all quiz GET api/quiz/
router.get('/', (req, res) => {
    Quiz.findAll({
        attributes: ['id', 'sex', 'ageCategory', 'category', 'needs', 'household', 'other_pets'], //add pet_id later
        include: [
            {
                model: User,
                attributes: ['id']
            }
        ]
    })
        .then(dbQuizData => res.json(dbQuizData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//get a quiz by user id GET /api/quiz/1
router.get('/:id', (req, res) => {
    Quiz.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'sex', 'ageCategory', 'category', 'needs', 'household', 'other_pets'],
        include: [
            {
                model: User,
                attributes: ['id'] 
            }
        ]
    })
    .then(dbQuizData => {
        if (!dbQuizData) {
            res.status(404).json({ message:'No quiz found with this id' });
            return;
        }
        res.json(dbQuizData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//create a quiz (associated with a user) POST api/quiz
router.post('/', (req, res) => {
    Quiz.create({
       sex: req.body.sex,
       ageCategory: req.body.ageCategory,
       category: req.body.category,
       needs: req.body.needs,
       household: req.body.household,
       other_pets: req.body.other_pets 
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// edit a quiz

//delete a quiz

module.exports = router;