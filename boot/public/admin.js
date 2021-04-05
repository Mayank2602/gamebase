
const  list=document.querySelector(".added");
var url_= document.getElementById("url1");
var text_=document.getElementById("name1");

db.collection("games")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.data());
        	console.log(doc.data().name+ " "+doc.data().link);
            
            
            
            list.innerHTML+="<h5 >"+doc.data().name+"</h5>"+"<a href='"+doc.data().link+"'>link</a>";
           
            var temp=doc.data().name;
            var textnode1=document.createTextNode(temp);
            var textnode=document.createElement("a");
            textnode.appendChild(textnode1);
             console.log(textnode);
            textnode.href=doc.data().link;
            var listnode=document.createElement("li");
            listnode.classList.add("list-group-item")
            textnode.classList.add("free")
            listnode.appendChild(textnode);
             
            var searchlist=document.getElementById("searchbar");
            searchlist.classList.add("list-group")
         
            searchlist.appendChild(listnode);
            console.log(listnode);
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

function output1(){
	

db.collection("games").doc().set({
    name: text_.value,
    link: url_.value

})
.then(() => {
           
    console.log("Document successfully written!");
    db.collection("games")
  .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.data().name+ " "+ doc.data().link);
            document.getElementById("searchbar").innerHTML+="<h5>"+doc.data().name+"</h5>"+"<a href='"+doc.data().link+"'>link</a>";
            window.location.reload();

        });
    });

   
            })
.catch((error) => {
    console.error("Error writing document: ", error);
});


   
}

	au.onAuthStateChanged((user)=>{
		if(user){
			
      
			console.log(user.uid)
		}
		else{
			console.log("not working");
		}
	var user= firebase.auth().currentUser;
    // User logged in already or has just logged in.
    console.log(user.uid);
    if(user.uid=="23"){
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
   
function searchfnx(){
    var input,li,filter,ul,txt,a,i;
    input=document.getElementById("myinput")
    console.log(input);
    filter=input.value.toUpperCase();
console.log(filter);
    ul=document.getElementById("searchbar");
    li=ul.getElementsByTagName("li");
    for(i=0;i<li.length;i++){
            a1=li[i].getElementsByTagName("a")[0];
            console.log(a1);
           txt=a1.innerText;
            console.log(txt);
            if(txt.toUpperCase().indexOf(filter)>-1){
                li[i].style.display="";
            }
            else{
                li[i].style.display="none";
            }
            
    }
}