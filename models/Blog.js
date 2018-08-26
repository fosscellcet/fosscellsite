module.exports = (sequelize, DataTypes) => {
    const blog = sequelize.define('blog', {
        id: {
            type: DataTypes.INTEGER(),
            autoIncrement: true,
            primaryKey: true
        },
        author: {
            type: DataTypes.STRING(),
            allowNull: false
        },
        title: {
            type: DataTypes.STRING(),
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT(),
            allowNull: false
        },
        coverImage: {
            type: DataTypes.STRING(),
            allowNull: false
        },
        likes: {
            type: DataTypes.INTEGER(),
            default: 0
        },
        postDate: {
            type: DataTypes.DATE(),
            allowNull: false
        },
        postTime: {
            type: DataTypes.TIME(),
            allowNull: false
        }
    })
    return blog
}