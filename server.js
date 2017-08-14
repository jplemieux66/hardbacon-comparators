const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));

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

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});