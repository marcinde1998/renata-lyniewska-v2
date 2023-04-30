const BlogPost = require('../model/BlogPost');

//ShowAllBlogPosts

function postsList(cb) {
    BlogPost.find().lean().then((blogPosts) => {
        cb(null, blogPosts)
    }).catch((err) => {
        cb(err);
    })
};

// AddPostToBlogPosts

function blogPostAdd(data, cb) {
    let newPost = new BlogPost(data)

    newPost.save().then(function (err, post) {
        if (err) {
            cb(err);
        } else {
            cb(null, post);
        }
    })
};

// DeleteFromBlogPostList

// function blogPostDelete(id, cb) {
//     BlogPost.deleteOne({ _id: id }, function (err, post) {
//         if (err) {
//             cb(err);
//         } else {
//             cb(null, post);
//         }
//     });
// }

function blogPostDelete(id, cb) {
    BlogPost.findById(id).deleteOne().then(function (err, post) {
        if (err) {
            cb(err)
        } else {
            cb(null, post)
        }
    })
}

// ShowPostById

function getOnePost(id, cb) {
    BlogPost.findById(id).populate().then(function (err, post) {
        if (err) {
            cb(err)
        } else {
            cb(null, post)
        }
    })
}

module.exports = {
    postsList: postsList,
    blogPostAdd: blogPostAdd,
    blogPostDelete: blogPostDelete,
    getOnePost: getOnePost
}