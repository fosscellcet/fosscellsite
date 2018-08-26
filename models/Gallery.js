module.exports = (sequelize, DataTypes) => {
    var Gallery = sequelize.define('gallery',{
        id : {
            type: DataTypes.INTEGER(),
            autoIncrement: true,
            primaryKey: true
        },
        name : {
            type: DataTypes.STRING(),
            allowNull: false
        },
        caption : {
            type: DataTypes.STRING(),
            allowNull: false
        },
        event_id : {
            type: DataTypes.INTEGER(),
            allowNull: false
        }
    })

    Gallery.associate = function(model){
        model.gallery.belongsTo(model.event, {
            foreignKey : {
                name : 'event_id'
            }
        })
    }

    return Gallery;
}