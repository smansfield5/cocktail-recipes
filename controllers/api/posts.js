const Posts = require('../../models/posts')

module.exports = {
    getAll,
    create
}

async function getAll(req, res) {
    const posts = await PostListPage.find({
        user: req.user._id 
    })
    res.json(posts);
}

async function create(req, res) {
    req.body.user = req.user_.id
    const post = await post.create(req.body);
    res.json(post);
}