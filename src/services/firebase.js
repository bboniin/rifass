import firebase from  'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyCZ1yjNw5M6ZuyP7RJc6O757sap_FBs0L0",
  authDomain: "siterifas-24c1d.firebaseapp.com",
  databaseURL: "https://siterifas-24c1d.firebaseio.com",
  projectId: "siterifas-24c1d",
  storageBucket: "siterifas-24c1d.appspot.com",
  messagingSenderId: "94258347017",
  appId: "1:94258347017:web:1575f018415df675638cd8",
  measurementId: "G-WWBDEMYMRH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

  export default firebase;