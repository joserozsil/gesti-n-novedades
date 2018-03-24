module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    return User;
};