const router = require('express').Router();
const { User } = require('../../Models');

//create user, sign up POST /api/users
router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email, 
        password: req.body.password
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//login POST api/users/login?
router.post('/login', (req, res) => {
  User.findOne({
    where: {
        email: req.body.email
    }
  })
});


//logout POST api/users/logout?
router.post('/logout', (req, res) => {

});

//delete a user DELETE /api/users/1
router.delete('/:id', (req, res) =>{
    User.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(dbUserData => {
          if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
          }
          res.json(dbUserData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

//edit user (quiz id is added or replaced) PUT /api/users/1
router.put(':/id', (req, res) => {
    User.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(dbUserData => {
            if (!dbUserData[0]) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

module.exports = router;