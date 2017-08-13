var config = {
  apiKey: 'AIzaSyCEqRHvphWUbE-7GsEd_tvZqbytpbKHVog',
  authDomain: 'hardbacon-comparators.firebaseapp.com',
  databaseURL: 'https://hardbacon-comparators.firebaseio.com',
  projectId: 'hardbacon-comparators',
  storageBucket: 'hardbacon-comparators.appspot.com',
  messagingSenderId: '249486670235',
};

firebase.initializeApp(config);

var roboAdvisorsSnapshot = firebase.database().ref('/roboAdvisors').once('value', function(dataSnapshot) {
  var roboAdvisors = dataSnapshot.val();
  comparatorGenerator.initializePage(roboAdvisors, "robo-advisors-table");
}, function(error) {
  console.log(error);
});