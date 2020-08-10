var express=require('express');
const { Router } = require('express');
var router=express.Router();
const {getAuthors, getPosts, getLikes, getComments, createAuthor,createComment,createLike,createPost}=require("../controllers/admin");



router.get("/authors",getAuthors);
router.get("/comments",getComments);
router.get("/likes",getLikes);
router.get("/posts",getPosts);

router.get("/create/authors",createAuthor);
router.get("/create/comments",createComment);
router.get("/create/likes",createLike);
router.get("/create/posts",createPost);


module.exports=router;