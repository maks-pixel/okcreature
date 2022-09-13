const User = require('./User');
const Quiz = require('./Quiz');
const Pet = require('./Pet');

//one-to-one relationship
User.hasOne(Quiz, {
    foreignKey: "user_id",
});

Quiz.belongsTo(User, {
    foreignKey: "user_id",
});

//one-to-many relationship
Quiz.hasMany(Pet, {
    foreignKey: "quiz_id",
});

Pet.belongsTo(Quiz, {
    foreignKey: "quiz_id",
});

module.exports = { User, Quiz, Pet };

