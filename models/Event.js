module.exports = (sequelize, DataTypes) => {
    var Event = sequelize.define('event',{
        id : {
            type: DataTypes.INTEGER(),
            autoIncrement: true,
            primaryKey: true
        },
        title : {
            type: DataTypes.STRING(),
            allowNull: false
        },
        description : {
            type: DataTypes.TEXT(),
            allowNull: false
        },
        date : {
            type: DataTypes.DATE(),
            allowNull: false
        },
        venue : {
            type: DataTypes.STRING(),
            allowNull: false
        },
        topic : {
            type: DataTypes.STRING(),
            allowNull: false
        },
        poster : {
            type: DataTypes.STRING(),
            allowNull: false
        }
    })

    return Event
}