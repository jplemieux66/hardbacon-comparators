firebase.initializeApp(firebaseConfig);

var roboAdvisorsSnapshot = firebase.database().ref('/roboAdvisors').once('value', function(dataSnapshot) {
  var roboAdvisors = dataSnapshot.val();
  comparatorGenerator.initializePage(roboAdvisors, "robo-advisors-table");

  var data = { html: document.documentElement.outerHTML };
  $.ajax ({
    type: 'POST',
    url: 'http://localhost:3000/generated-roboadvisors-page',
    processData: false,
    contentType: 'application/json',
    data: JSON.stringify(data),
    success: function(r) { console.log("Successfully sent HTML")}
  });
}, function(error) {
  console.log(error);
});