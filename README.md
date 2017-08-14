# Hardbacon Comparator Generator

A tool to generate comparator tables for [Hardbacon](https://www.hardbacon.ca) using Firebase for the data, jQuery to generate the tables, Bootstrap for styling and Node.js for server-side code. 

## Data Structure 

Each comparator has its table in Firebase.
For each comparator, you have "headers" and "entries"
### Headers
The headers property is an array. Each array contained within it represents a distinct Header Row. Every Header Row except the first Row for the first entry is hidden and can be shown by pressing 'More Details'. 

Every Header is a JSON object with the following properties:
  
  + description: Text to show for tooltip
  + label: Label for the Header
  + valueName: What property of the data entries this header is linked to
  + (OPTIONAL) showLabelOnMobile: When set to false, the label will not be shown on mobile devices.
  
### Entries
Every Entry is a JSON object, and each property represents a value. 

**!! The name of the property must always match the valueName set on the Header !!**

  If you want the text to show on multiple lines, you can create an Array of strings. Each value in the array will be shown on a separate   line.
  
  If the property value is a url or a file ending in either '.png', '.gif', '.jpg' or '.jpeg', an image will be shown instead of text.
  
  Finally, if there is a promotional offer, the description can be put in the property value, and a button which activates the popup will   be created. 
  
  **Make sure the 'name' property is correctly set so the popup text is accordingly adjusted**
  
  ## Regenerate Tables
  
  For performance reasons, the tables are cached on the server and will not update automatically if the data is changed.
  If you want to regenerate the tables, visit the following URLS:
  
  **Brokerages**: /generate-brokerages-page
  **Robo-Advisors**: /generate-roboadvisors-page
  
  ## Guide: How to create a new comparator
  
  ##### Create a new directory in /public/ with the appropriate comparator name.
  ##### Copy files from /public/template
  In index.html, change the title to something more appropriate
  In initialization.js, locate this line: 
  
  var snapshot = firebase.database().ref('/FIREBASEREF').once('value', function(dataSnapshot) {
  
  and replace FIREBASEREF with the appropriate Firebase table name.
  A little lower on the page, modify the 'url' property of the AJAX request to a new post URL, with format 'generate-(DATANAME)-table'. This server route will be created later.
  
  #### Modify server.js
  3 routes need to be created in the file server.js. Copy-paste this snippet above the call to app.listen, and replace DATANAME by the data that is shown in the comparator.
  
  
  // DATANAME
app.use('/generate-DATANAME-page', express.static(__dirname + '/public/DATANAME'));

app.post('/generated-DATANAME-page', (req, res) => {
    var html = req.body.html;
    html = "<!doctype html> \n" + html;
    html = html.replace('  <script src="comparator-generator.js"></script>', '');
    html = html.replace('  <!-- Custom JavaScript files --> ', '');
    html = html.replace('  <script src="brokerages.js"></script>', '');

    fs.writeFile(__dirname + '/public/DATANAME/cached_DATANAME.html', html, (err) => {
        if (err) throw err;
        console.log('Cached DATANAME page has been successfully generated');
        res.end();
    });
});

app.get('/DATANAME', (req, res) => {
    res.sendFile(__dirname + '/public/brokerages/cached_DATANAME.html');
});
  
   
