var config = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "hardbacon-comparators-demo.firebaseapp.com",
  databaseURL: "https://hardbacon-comparators-demo.firebaseio.com",
  projectId: "hardbacon-comparators-demo",
  storageBucket: "hardbacon-comparators-demo.appspot.com",
  messagingSenderId: "1531169764"
};

var getConfig = () => {
  return config;
}

module.exports = {
  getConfig
}