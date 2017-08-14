var config = {
  apiKey: 'AIzaSyCEqRHvphWUbE-7GsEd_tvZqbytpbKHVog',
  authDomain: 'hardbacon-comparators.firebaseapp.com',
  databaseURL: 'https://hardbacon-comparators.firebaseio.com',
  projectId: 'hardbacon-comparators',
  storageBucket: 'hardbacon-comparators.appspot.com',
  messagingSenderId: '249486670235',
};

firebase.initializeApp(config);

var snapshot = firebase.database().ref('/FIREBASEREF').once('value', function(dataSnapshot) {
  var data = dataSnapshot.val();
  comparatorGenerator.initializePage(data, "main-table");

  var data = { html: document.documentElement.outerHTML };
  $.ajax ({
    type: 'POST',
    // CHANGE TO NEW POST URL
    url: "",
    processData: false,
    contentType: 'application/json',
    data: JSON.stringify(data),
    success: function(r) { console.log("Successfully sent HTML")}
  });
}, function(error) {
  console.log(error);
});