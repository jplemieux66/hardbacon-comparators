var config = {
  apiKey: 'AIzaSyCEqRHvphWUbE-7GsEd_tvZqbytpbKHVog',
  authDomain: 'hardbacon-comparators.firebaseapp.com',
  databaseURL: 'https://hardbacon-comparators.firebaseio.com',
  projectId: 'hardbacon-comparators',
  storageBucket: 'hardbacon-comparators.appspot.com',
  messagingSenderId: '249486670235',
};

firebase.initializeApp(config);

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