'use strict';
module.exports = (sequelize, DataTypes) => {
    const Settings = sequelize.define('Settings', {
        email: DataTypes.STRING,
    }, {});
    Settings.associate = function (models) {

    }
    return Settings;
};