const User = require('./User');
const Quiz = require('./Quiz');
const Pet = require('./Pet');

//one-to-one relationship
User.hasOne(Quiz, {
    foreignKey: "user_id",
    //hooks: true
});

Quiz.belongsTo(User, {
    foreignKey: "user_id",
    //onDelete: "cascade",
    //hooks: true
});

//one-to-many relationship
Quiz.hasMany(Pet, {
    foreignKey: "pet_id",
    onDelete: "cascade",
    hooks: true
});

Pet.belongsTo(Quiz, {
    foreignKey: "quiz_id",
    onDelete: "cascade",
    hooks: true
});

module.exports = { User, Quiz, Pet };

