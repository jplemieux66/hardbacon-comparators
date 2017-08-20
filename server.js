const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');
const email = require('./email.js');

import React from 'react';
const ReactDOMServer = require('react-dom/server');
import firebase from 'firebase';
import Comparator from './react-templates/components/Comparator/Comparator';
import template from './template.js';

var app = express();
const port = process.env.PORT || 3003;

app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));

var config = {
  apiKey: 'AIzaSyCEqRHvphWUbE-7GsEd_tvZqbytpbKHVog',
  authDomain: 'hardbacon-comparators.firebaseapp.com',
  databaseURL: 'https://hardbacon-comparators.firebaseio.com',
  projectId: 'hardbacon-comparators',
  storageBucket: 'hardbacon-comparators.appspot.com',
  messagingSenderId: '249486670235',
};

firebase.initializeApp(config);

// BROKERAGES
app.use('/generate-brokerages-page', express.static(__dirname + '/public/brokerages'));

app.post('/generated-brokerages-page', (req, res) => {
    var html = req.body.html;
    html = "<!doctype html> \n" + html;
    html = html.replace('  <script src="comparator-generator.js"></script>', '');
    html = html.replace('  <!-- Custom JavaScript files --> ', '');
    html = html.replace('  <script src="brokerages.js"></script>', '');

    fs.writeFile(__dirname + '/public/brokerages/cached_brokerages.html', html, (err) => {
        if (err) throw err;
        console.log('Cached Brokerages page has been successfully generated');
        res.end();
    });
});

app.get('/brokerages', (req, res) => {
    res.sendFile(__dirname + '/public/brokerages/cached_brokerages.html');
});

// ROBO-ADVISORS
app.use('/generate-roboadvisors-page', express.static(__dirname + '/public/roboadvisors'));

app.post('/generated-roboadvisors-page', (req, res) => {
    var html = req.body.html;
    html = "<!doctype html> \n" + html;
    html = html.replace('  <script src="comparator-generator.js"></script>', '');
    html = html.replace('  <!-- Custom JavaScript files --> ', '');
    html = html.replace('  <script src="brokerages.js"></script>', '');

    fs.writeFile(__dirname + '/public/roboadvisors/cached_roboadvisors.html', html, (err) => {
        if (err) throw err;
        console.log('Cached Robo-Advisors page has been successfully generated');
        res.end();
    });
});

app.get('/roboadvisors', (req, res) => {
    res.sendFile(__dirname + '/public/roboadvisors/cached_roboadvisors.html');
});

// Send Email Route
app.post('/send-email', (req, res) => {
    var recaptcha = req.body["g-recaptcha-response"];
    if (recaptcha != "") {
        email.sendEmail(req.body.email, req.body.name, req.body.offerName);
    }
    if (req.body.subscribe == "on") {
        email.addSubscriber(req.body.email, req.body.name, req.body.offerName);
    }
    res.end();
});

app.use('/assets', express.static(__dirname + '/assets'));

app.get('/react-brokerages', (req, res) => {
  firebase
    .database()
    .ref('/brokerages_en')
    .once('value')
    .then(dataSnapshot => {
      var data = dataSnapshot.val ();

      var markup = ReactDOMServer.renderToStaticMarkup(<Comparator data={data} />);
      res.send(template(markup));
    })
    .catch(error => {
      console.log(error);
    });
});


app.listen(port, () => {
    console.log(`Started on port ${port}`);
});