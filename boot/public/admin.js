
document.getElementById("toggle_nav").addEventListener("click",()=>{
    if (document.getElementById("navbarSupportedContent").style.display=="block"){
        document.getElementById("navbarSupportedContent").style.display="none"}
  else{ document.getElementById("navbarSupportedContent").style.display="block"} 
    })
const  list=document.querySelector(".added");
var url_= document.getElementById("url1");
var text_=document.getElementById("name1");
 var searchlist=document.getElementById("searchbar");

    au.onAuthStateChanged((user)=>{

        if(user){

    // User logged in already or has just logged in.
    console.log(user.uid);
    if(user.uid=='SHPQtJ8Ei1dwYcbDUojzumt7W562'){
        console.log("checked loggedout122")
         document.querySelector("#btn1").style.display="";

            document.querySelector("#url1").style.display="";
            document.querySelector("#name1").style.display="";
            
  }else {
    // User not logged in or has just logged out.
    
    console.log("checked loggedout12")

    document.querySelector("#btn1").style.display="none";

            document.querySelector("#url1").style.display="none";
            document.querySelector("#name1").style.display="none";}
} else {
    // User not logged in or has just logged out.
    
    console.log("checked loggedout12")

    document.querySelector("#btn1").style.display="none";

            document.querySelector("#url1").style.display="none";
            document.querySelector("#name1").style.display="none";}

           /* var anc=list.getElementsByTagName("a");
            console.log(anc);
            anc.href="#";
*/
            });
      
            
        


db.collection("games")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            
            
            
            
           
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
             
           
            searchlist.classList.add("list-group")
         
            searchlist.appendChild(listnode);
            console.log(listnode);

            au.onAuthStateChanged((user)=>{

        if(user){
             list.innerHTML+="<li id='abc'>"+doc.data().name+"</li>"+"<a id='abc1' href='"+doc.data().link+"'>Click Here To Access</a>";
           
    // User logged in already or has just logged in.
console.log("logged in user")
            
  } else {
    // User not logged in or has just logged out.
    list.innerHTML+="<h5 id='abc'>"+doc.data().name+"</h5>"+"<a  href='"+"#"+"'>Click Here To Access</a>";
     textnode.href="#";
    
            }});
            
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
    au.onAuthStateChanged((user)=>{if(user){console.log("flag1")}
        else{
    searchlist.addEventListener("click",()=>{
        alert("sign in to access");
     });
     list.addEventListener("click",()=>{
        alert("sign in to access");
     });
 }});
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
            document.getElementById("searchbar").innerHTML+="<li>"+doc.data().name+"</li>"+"<a href='"+doc.data().link+"'>Click Here To Access</a>";
            window.location.reload();

        });
    });

   
            })
.catch((error) => {
    console.error("Error writing document: ", error);
});


   
}

      




   
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