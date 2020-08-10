const Author = require('../models/authors');
const Comment = require('../models/comments');
const Like = require('../models/likes');
const Post = require('../models/posts');

exports.getAuthors = (req, res) => {
    Author.find().exec((err, author) => {
        if (err || !author)
            return res.status(400).json({
                error: "Authors does not exits"
            });
        return res.json(author);
    })
}

exports.getComments = (req, res) => {
    Comment.find().exec((err, comment) => {
        if (err || !comment)
            return res.status(400).json({
                error: "Authors does not exits"
            });
        return res.json(comment);
    })
}

exports.getLikes = (req, res) => {
    Like.find().exec((err, like) => {
        if (err || !like)
            return res.status(400).json({
                error: "Authors does not exits"
            });
        return res.json(like);
    })
}

exports.getPosts = (req, res) => {
    Post.find().exec((err, post) => {
        if (err || !post)
            return res.status(400).json({
                error: "Authors does not exits"
            });
        return res.json(post);
    })
}

exports.createAuthor = (req, res) => {
    const author = new Author(req.body);
    author.save((err, author) => {
        if (err) {
            return res.status(400).json({
                err: "Not Able to save author"})
            }
        else {
            return res.json({
                id:author.id,
                firstName:author.firstName,
                lastName:author.lastName,
                phone:author.phone

            })
                }
    })
}


exports.createComment = (req, res) => {
    const comment = new Comment(req.body);
    comment.save((err, comment) => {
        if (err) {
            return res.status(400).json({
                err: "Not Able to save author"})
            }
        else {
            return res.json({
                id:comment.id,
                text:comment.text,
                postId:comment.postId,
                authorId:comment.authorId
            })
                }
    })
}

exports.createLike = (req, res) => {
    const like = new Like(req.body);
    like.save((err, like) => {
        if (err) {
            return res.status(400).json({
                err: "Not Able to save like"})
            }
        else {
            return res.json({
                id:like.id,
                postId:like.postId,
                authorId:like.authorId
            })
                }
    })
}

exports.createLike = (req, res) => {
    const like = new Like(req.body);
    like.save((err, like) => {
        if (err) {
            return res.status(400).json({
                err: "Not Able to save like"})
            }
        else {
            return res.json({
                id:like.id,
                postId:like.postId,
                authorId:like.authorId
            })
                }
    })
}


exports.createPost = (req, res) => {
    const post = new Post(req.body);
    post.save((err, post) => {
        if (err) {
            return res.status(400).json({
                err: "Not Able to save post"})
            }
        else {
            return res.json({
                id:post.id,
                title:post.title,
                description:post.description,
                authorId:post.authorId
            })
                }
    })
}