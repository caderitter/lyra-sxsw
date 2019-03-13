var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var request = require('request');

var Post = require('../models/post');

router.use(bodyParser.json());

router.post('/create_post', function (req, res) {
    if (req.body.user_id) {
        if (req.body.content_ref) {
                Post.create({
                    userId: req.body.user_id ? req.body.user_id : "",
                    ref: req.body.content_ref,
                    timestamp: Date.now,
                    likes: [],
                    comments: []
                },
                function (err, post) {
                    if (err) return res.status(500);
                    res.status(200).send(post);
                });
            } else {
                res.status(400).send("No Spotify content specified to share.")
        }
    } else {
        res.status(400).send("No user specified")
    }
});

// router.post('/add_comment', function(req, res) {
//     if (req.body.user_id) {
//         if (req.body.post_id) {
//             if (req.body.comment_body) {
//                 Post.update()
//             } else {
//                 res.status(400).send("No comment body specified");
//             }
//         } else {
//             res.status(400).send("No post specified");
//         }
//     } else {
//         res.status(400).send("No user specified");
//     }
// })

module.exports = router;