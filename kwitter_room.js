
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
      apiKey: "AIzaSyBY5y4_AyvNlBLYOk-mCLcGY-yUNFGS6kI",
      authDomain: "letschatwebapp-2.firebaseapp.com",
      projectId: "letschatwebapp-2",
      storageBucket: "letschatwebapp-2.appspot.com",
      messagingSenderId: "329330310998",
      appId: "1:329330310998:web:1369f2b87786bc0c7fa0f7"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
