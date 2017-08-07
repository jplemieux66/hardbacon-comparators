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

  
  console.log(brokerages);
}, function(error) {
  console.log(error);
});