var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var Post = require('../models/post');

router.use(bodyParser.json());

router.post('/create_post', function (req, res) {
    if (req.body.user_id) {
        if (req.body.content_ref) {
            Post.create({
                userId: req.body.user_id ? req.body.user_id : "",
                ref: req.body.content_ref,
                timestamp: Date.now(),
                likes: [],
                comments: []
            },
            function (err, post) {
                if (err) return res.status(500).send(err);
                return res.status(200).send(post);
            });
            } else {
                res.status(400).send("No Spotify content specified to share.")
        }
    } else {
        res.status(400).send("No user specified")
    }
});

router.put('/add_comment', function(req, res) {
    if (req.body.user_id) {
        if (req.body.post_id) {
            if (req.body.comment_body) {
                Post.findById(req.body.post_id, function (err, doc) {
                    if (err) return res.status(404).send("Could not find specified post");
                    doc.comments.push({
                        userId: req.body.user_id,
                        body: req.body.comment_body,
                        timestamp: Date.now()
                    })
                    doc.save(function (err, post) {
                        if (err) return res.status(500).send(err)
                        res.status(200).send(post)
                    })
                })
            } else {
                res.status(400).send("No comment body specified");
            }
        } else {
            res.status(400).send("No post specified");
        }
    } else {
        res.status(400).send("No user specified");
    }
})

module.exports = router;