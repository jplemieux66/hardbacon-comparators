const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');
// const email = require('./email/email.js');
const firebaseConfig = require('./firebase-config.js');

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import firebase from 'firebase';
import Comparator from './react-components/Comparator/Comparator';
import template from './template.js';

var app = express();
const port = process.env.PORT || 3003;

app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));

var config = firebaseConfig.getConfig();
firebase.initializeApp(config);

app.use('/assets', express.static(__dirname + '/assets'));

// BROKERAGES (ENGLISH)
app.get('/generate-brokerages_en', (req, res) => {
  firebase
    .database()
    .ref('/brokerages_en')
    .once('value')
    .then(dataSnapshot => {
      var data = dataSnapshot.val ();

      var markup = ReactDOMServer.renderToStaticMarkup(<Comparator data={data} />);
      var html = template(markup);

      fs.writeFile(__dirname + '/generated-comparators/brokerages_en.html', html, (err) => {
        if (err) throw err;
        console.log('Cached Brokerages (english) page has been successfully generated');
        res.end();
      });
    })
    .catch(error => {
      console.log(error);
    });
});

app.get('/brokerages_en', (req, res) => {
    res.sendFile(__dirname + "/generated-comparators/brokerages_en.html")
});

// Send Email Route
app.post('/send-email', (req, res) => {
  var recaptcha = req.body["g-recaptcha-response"];
  if (recaptcha != "") {
      // email.sendEmail(req.body.email, req.body.name, req.body.offerName, req.body.language);
  }
  if (req.body.subscribe == "on") {
      // email.addSubscriber(req.body.email, req.body.name);
  }
  res.end();
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});