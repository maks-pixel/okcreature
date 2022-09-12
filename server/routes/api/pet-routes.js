const router = require('express').Router();
const { Pet } = require('../../Models');
const sequelize = require('../../config/connection');

//get all pets
router.get('/', (req,res) =>{
    Pet.findAll({
        attributes: [
            'id',
            'name',
            'sex',
            'image',
            'description',
            'location',
            'ageCategory',
            'category',
            'needs',
            'household',
            'other_pets'
        ],
        oreder: [['created_at', 'DESC']]
    })
    .then(dbPetData => res.json(dbPetData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//get one pet by id
router.get('/:id', (req, res) => {
    Pet.findOne({
            where: {
                id: req.params.id
            },
            attributes: [
                'id',
                'name',
                'sex',
                'image',
                'description',
                'location',
                'ageCategory',
                'category',
                'needs',
                'household',
                'other_pets'
            ]
        })
        .then(dbPetData => {
            if(!dbPetData){
                res.status(404).json({ message: 'nope there are no pets with this id' });
                return;
            }
            res.json(dbPetData);
        })
        .catch(err => {
            console.log(err)
            req.status(500).json(err);
        });
})
module.exports = router;
