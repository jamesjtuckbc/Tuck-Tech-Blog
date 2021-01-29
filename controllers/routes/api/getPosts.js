const { Posts } = require('../../../models');

async function getPosts(userId) {
    return posts = await Posts.findAll({
        where: {
            user_id: userId
        }
    })
}

module.exports = getPosts;