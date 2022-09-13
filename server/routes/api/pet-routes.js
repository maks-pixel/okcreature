const router = require('express').Router();

const { User, Pet, Quiz } = require('../../Models');

//find all pets findAll
router.get('/', (req, res) => {
    Pet.findAll({
        attributes: [],
    })
    .then()
    .catch();
});

//find a pet by search term findByPk
router.get('/:id', (req, res) => {

});

//add a pet  create
router.post('/', (req, res) => {

});

//edit a pet  update
router.put('/:id', (req, res) => {});

//delete a pet
router.delete('/:id', (req, res) => {});

module.exports = router;