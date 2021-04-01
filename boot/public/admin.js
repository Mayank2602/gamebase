
const  list=document.querySelector(".added");
const url_= document.getElementById("url1").value;
const text_=document.getElementById("name1").value;

db.collection("games")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
        	console.log(doc.data().name+ " "+doc.data().link);
            list.innerHTML+="<h5>"+doc.data().name+"</h5>"+"<a href='"+doc.data().link+"'>link</a>";
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

function output1(){
	

db.collection("games").doc().set({
    name: text_,
    link: url_
})
.then(() => {
    console.log("Document successfully written!");
})
.catch((error) => {
    console.error("Error writing document: ", error);
});

db.collection("games")
  .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
        	console.log(doc.data().name+ " "+ doc.data().link);
            list.innerHTML+="<h5>"+doc.data().name+"</h5>"+"<a href='"+doc.data().link+"'>link</a>";
        });
    })
   
}
user=document.cookie;
	au.onAuthStateChanged((user)=>{
		if(user){
			 var user1 = firebase.auth().currentUser;
      
			console.log(user1.uid)
		}
		else{
			console.log("not working");
		}
	var user= firebase.auth().currentUser;
    // User logged in already or has just logged in.
    console.log(user.uid);
    if(user1.uid=="23"){
    	 document.querySelector("#btn1").style.display="block";

    		document.querySelector("#url1").style.display="block";
    		document.querySelector("#name1").style.display="block";
    		
  } else {
    // User not logged in or has just logged out.
    console.log("check")
    document.querySelector("#btn1").style.display="none";

    		document.querySelector("#url1").style.display="none";
    		document.querySelector("#name1").style.display="none";}
    		});
   
