const { Comments, Posts } = require('../../../models');

async function getPosts(userId) {
    return posts = await Posts.findAll({
        where: {
            user_id: userId
        },
        order: [
            ['date_modifed','DESC'],
        ],
    });
};

async function getAllPosts() {
    return posts = await Posts.findAll({
        // include: [{
        //     model: Comments
        // }]
        // ,
        order: [
            ['date_modifed','DESC'],
        ],
    });
};

module.exports = {
    getPosts,
    getAllPosts
};