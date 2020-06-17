'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        premium: DataTypes.BOOLEAN,
        phone: DataTypes.STRING
    }, {});
    User.associate = function(models){

    }
    return User;
};