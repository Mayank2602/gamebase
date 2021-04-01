
 var user = firebase.auth().currentUser;
 
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {

    // User is signed in.
   
    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";
    document.getElementById("register").style.display = "none";
   
    
      console.log(user.uid);

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
     document.getElementById("register").style.display = "block";

  }
});
function signup(){

var email1=document.getElementById("email_reg").value;
var password1=document.getElementById("password_reg").value;
firebase.auth().createUserWithEmailAndPassword(email1,password1).then(cred =>{
alert("User Registration Succesful") ;

})

}
function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(() => {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });


    // ...
  };



function logout(){
  firebase.auth().signOut();
}
 
const home =()=>{
  window.history.back();
}