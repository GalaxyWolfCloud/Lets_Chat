var firebaseConfig = {
      apiKey: "AIzaSyB3_MFRZkRnx-j6Z8AcY5M3OOKvyZzG_rs",
      authDomain: "kwitter-cfb65.firebaseapp.com",
      databaseURL: "https://kwitter-cfb65-default-rtdb.firebaseio.com",
      projectId: "kwitter-cfb65",
      storageBucket: "kwitter-cfb65.appspot.com",
      messagingSenderId: "771200249972",
      appId: "1:771200249972:web:6e370cf819b414c0576121"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("room Name - " + Room_names);
                  row = "<div class='room_name'id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.HTML";
}

function logout() {

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}