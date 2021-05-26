var firebaseConfig = {
    apiKey: "AIzaSyDPCszie4IVSXaX088Z3Er0yKZTNn3V8F8",
    authDomain: "project94-5e9bd.firebaseapp.com",
    databaseURL: "https://project94-5e9bd-default-rtdb.firebaseio.com",
    projectId: "project94-5e9bd",
    storageBucket: "project94-5e9bd.appspot.com",
    messagingSenderId: "770869062399",
    appId: "1:770869062399:web:2e7606a6d831aab93efaca",
    measurementId: "G-WMYGN6C0K0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  function adduser(){
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location="kwitter_room.html";
    
}

function getuser(){
    welcomeusername=localStorage.getItem("user_name");
    document.getElementById("welcome_username",welcomeusername).innerHTML="Welcome" + welcomeusername ;
}
