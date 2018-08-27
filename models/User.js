module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('user', {
        id : {
            type: DataTypes.INTEGER(),
            autoIncrement: true,
            primaryKey: true
        },
        username : {
            type: DataTypes.STRING(),
            unique: true,
            allowNull: false
        },
        password : {
            type: DataTypes.STRING(),
            allowNull: false
        },
        userType : {
            type: DataTypes.STRING(),
            allowNull: false
        }
    })
    return User;
}