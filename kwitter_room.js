const firebaseConfig = {
      apiKey: "AIzaSyB5Kh5TN0bfzchOI-Ko0v-2YfxNdNJtIoE",
      authDomain: "project-kwitter-d9378.firebaseapp.com",
      databaseURL: "https://project-kwitter-d9378-default-rtdb.firebaseio.com",
      projectId: "project-kwitter-d9378",
      storageBucket: "project-kwitter-d9378.appspot.com",
      messagingSenderId: "325099470891",
      appId: "1:325099470891:web:11b13c3d003aabb8ca2a6e"
    };
  firebase.initializeApp(firebaseConfig);

  user = localStorage.getItem("User name");
  document.getElementById("welcome_name").innerHTML = "Welcome " + user;
  
  function addRoom(){
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
          purpose:"Adding Room Name"
      });
        localStorage.setItem("Room_name",room_name);
        window.location = "chatting.html";
  }
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("display_rooms").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
        console.log(Room_names);
        display = "<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'> #"+Room_names+"</div> <hr>";
        document.getElementById("display_rooms").innerHTML += display;
        //End code
        });});}
  getData();
  
  function redirect(name){
        console.log(name);
        localStorage.setItem("Room_name",name);
        window.location = "chating.html";
  }
  