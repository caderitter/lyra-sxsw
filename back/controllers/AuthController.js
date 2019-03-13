var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Item = require('../models/user');
var config = require('../config')();
const request = require('request-promise-native');


router.post('/auth', function(req, res) {
    const options = {
        method: 'POST',
        uri: 'https://accounts.spotify.com/api/token',
        body: {
          grant_type: "authorization_code",
          code: req.code,
          redirect_uri: 'http://localhost:3000/auth'
        },
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + (new Buffer(config.clientID + ':' + clientSecret).toString('base64'))
        }
    }
    
    request(options)
    .then(function (body) {
        return res.status(500).send({token: body.access_token})
    }).catch(function (err) {
        return res.status(500).send();
    })

});

module.exports = router;