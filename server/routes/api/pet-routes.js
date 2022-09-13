
const router = require('express').Router();
const { User, Pet, Quiz } = require('../../Models');

//find all pets findAll
router.get('/', (req, res) => {
    Pet.findAll()
        .then(dbPetData => res.json(dbPetData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//find a pet by search term findByPk
router.get('/:id', (req, res) => {
    Pet.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(dbPetData => {
            if (!dbPetData) {
                res.status(404).json({ message: 'No pet found with this id' });
                return;
            }
            res.json(dbPetData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//pets created by faker, seeded into database. matching algorithm will assign a quiz_id to a pet
// router.post('/', (req, res) => {
//     Pet.create({

//     })
// });

//edit a pet  update
//router.put('/:id', (req, res) => {});

//delete a pet
router.delete('/:id', (req, res) => {
    Pet.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbPetData => {
            if (!dbPetData) {
                res.status(404).json({ message: 'No pet found with this id' });
                return;
            }
            res.json(dbPetData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;