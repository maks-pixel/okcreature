const router = require('express').Router();
const { Quiz, User } = require('../../Models');
const sequelize = require('../../config/connection');

//get all quizes
router.get('/', (req, res) =>{
    Quiz.findAll({
        attributes: [
            'id', 
            'sex', 
            'ageCategory', 
            'category', 
            'needs', 
            'household', 
            'other_pets'
        ],
        order: [['created_at', 'DESC']],
        include:[
            {model: User,
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

// get one quiz by id
router.get('/:id', (req, res) => {
    Quiz.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id', 
            'sex', 
            'ageCategory', 
            'category', 
            'needs', 
            'household', 
            'other_pets'
        ],
       include: [
        {
            model: User,
            attributes: ['id']
        }
       ] 
    })
    .then(dbQuizData => {
        if(!dbQuizData){
            res.status(404).json({message: 'nope no quiz with this ID' });
            return;
        }
        res.json(dbQuizData);
    })
    .catch(err => {
        console.log(err);
        req.status(500).json(err);
    });
});

// create quiz
router.post('/',(req, res) => {
    Quiz.create({
      sex: req.body.sex,
      ageCategory: req.body.ageCategory,
      category: req.body.category,
      needs: req.body.needs,
      household: req.body.household,
      other_pets: req.body.other_pets,
      user_id: req.body.user_id
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});



//update quiz by id
router.put('/:id', (req, res) =>{
    Quiz.update(
        {
            sex: req.body.sex,
            ageCategory: req.body.ageCategory,
            category: req.body.category,
            needs:req.body.needs,
            household: req.body.household,
            other_pets: req.body.other_pets
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbQuizData =>{
        if(!dbQuizData){
            res.status(404).json({ message: ' No Quiz found with this damn id' });
            return;
        }
        res.json(dbQuizData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// delete quiz by id
router.delete('/:id', (req, res) => {
    Quiz.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbQuizData => {
        if(!dbQuizData){
            res.status(404).json({ message: 'No quiz found with this id dude!' });
            return;
        }
        res.json(dbQuizData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
