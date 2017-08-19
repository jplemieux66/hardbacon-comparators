import React from 'react';
import ReactDOM from 'react-dom';
import Comparator from './../components/Comparator/Comparator';
import firebase from 'firebase';
// import './../styles.css';

var config = {
  apiKey: 'AIzaSyCEqRHvphWUbE-7GsEd_tvZqbytpbKHVog',
  authDomain: 'hardbacon-comparators.firebaseapp.com',
  databaseURL: 'https://hardbacon-comparators.firebaseio.com',
  projectId: 'hardbacon-comparators',
  storageBucket: 'hardbacon-comparators.appspot.com',
  messagingSenderId: '249486670235',
};

firebase.initializeApp(config);

firebase.database().ref('/brokerages').once('value').then((dataSnapshot) => {
  var data = dataSnapshot.val();

  ReactDOM.render(
    <Comparator data={data}/>,
    document.getElementById('root')
  );

}).catch((error) => {
  console.log(error);
});
