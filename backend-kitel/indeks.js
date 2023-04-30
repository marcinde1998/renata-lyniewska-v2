const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

const blogPost = require('./app/controller/blogPosts.controller');
const users = require('./app/controller/users.controller');

//LoginSegment
app.get('/show/users/moderator', function (req, res) {

    users.userPass(function (err, users) {

        if (err) res.send(err);
        res.json(users);
    });
});


//BlogPosts

app.get('/post/:id', function (req, res) { //ShowPostByID

    blogPost.getOnePost(req.params.id, function (err, post) {
        if (err) {
            res.json(err);
        } else {
            res.json(post);
        }
    })
});

app.get('/show/blog/posts', function (req, res) { //ShowAllBlogPosts

    blogPost.postsList(function (err, blogPosts) {

        if (err) res.send(err);
        res.json(blogPosts);
    });
});

app.post('/add/post/to/blog/posts', function (req, res) { //AddPostToBlogPosts
    blogPost.blogPostAdd(req.body, function (err, blogPost) {
        console.log(err);
        if (err) {
            res.status(404);
            res.json({
                error: "Record not created"
            });
        } else {
            res.json(blogPost);
        }
    })
});

app.delete('/delete/post/from/posts/list/:id', function (req, res) { //DeleteFromBlogPostList

    blogPost.blogPostDelete(req.params.id, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            res.json(data);
        }
    });
});

app.listen(8080, function () {
    console.log('Serwer Node.js działa');
});