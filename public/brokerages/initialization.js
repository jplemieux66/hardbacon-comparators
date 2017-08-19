firebase.initializeApp(firebaseConfig);

var brokeragesSnapshot = firebase.database().ref('/brokerages').once('value', function(dataSnapshot) {
  var brokerages = dataSnapshot.val();
  comparatorGenerator.initializePage(brokerages, "main-table");

  var data = { html: document.documentElement.outerHTML };
  $.ajax ({
    type: 'POST',
    url: 'http://localhost:3000/generated-brokerages-page',
    processData: false,
    contentType: 'application/json',
    data: JSON.stringify(data),
    success: function(r) { console.log("Successfully sent HTML")}
  });

}, function(error) {
  console.log(error);
});