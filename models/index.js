const Comments = require('./Comments');
const Posts = require('./Posts');
const Userlog = require('./Userlog');
const Users = require('./Users');

Users.hasMany(Comments, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Users.hasMany(Posts, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Users.hasMany(Userlog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Comments.belongsTo(Users, {
    foreignKey: 'user_id'
});

Posts.belongsTo(Users, {
    foreignKey: 'user_id'
});

Userlog.belongsTo(Users, {
    foreignKey: 'user_id'
});

module.exports = {Comments, Posts, Userlog, Users};