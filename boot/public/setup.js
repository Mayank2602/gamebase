const gamelinks=document.querySelector('.check');
const log1=document.querySelector(".logme");
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
gamelinks.style.display="none"
log1.style.display="block";
const datbase=document.getElementById("adminbase");


}   else {
    // No user is signed in.

    console.log("signed out");
    gamelinks.style.display="block"
log1.style.display="none";
   gamelinks.addEventListener("click",function(){
   	alert("please sign in to access the games")
   });

  }
});
