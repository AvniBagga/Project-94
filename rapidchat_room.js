//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBbq4YM6yRG12-5z0ZHMCxd_QKMn_Yg3hE",
    authDomain: "toxyy-cdae8.firebaseapp.com",
    databaseURL: "https://toxyy-cdae8-default-rtdb.firebaseio.com",
    projectId: "toxyy-cdae8",
    storageBucket: "toxyy-cdae8.appspot.com",
    messagingSenderId: "741632223002",
    appId: "1:741632223002:web:5dbc70f7f2309a7b11eea3"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
