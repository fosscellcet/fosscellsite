module.exports = (sequelize, DataTypes) => {
    const Team = sequelize.define('team',{
        id : {
            type : DataTypes.INTEGER(),
            autoIncrement : true,
            primaryKey : true
        },
        name : {
            type : DataTypes.STRING(),
            allowNull : false
        },
        designation : {
            type : DataTypes.STRING(),
            allowNull : false
        },
        quote : {
            type : DataTypes.TEXT()
        },
        image : {
            type : DataTypes.STRING(),
            allowNull : false
        }
    });
    return Team;
}