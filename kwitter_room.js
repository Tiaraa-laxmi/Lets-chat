const firebaseConfig = {
      apiKey: "AIzaSyA7kGwRqOun-3l4tXxRg-Dc7AXYdyEiQVQ",
      authDomain: "classtest-edb6e.firebaseapp.com",
      databaseURL: "https://classtest-edb6e-default-rtdb.firebaseio.com",
      projectId: "classtest-edb6e",
      storageBucket: "classtest-edb6e.appspot.com",
      messagingSenderId: "1093050186790",
      appId: "1:1093050186790:web:88a1c585dffa4486787ae7"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
