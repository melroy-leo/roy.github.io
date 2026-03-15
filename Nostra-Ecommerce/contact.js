var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closebtn = document.getElementById("side-navbar-close")

menuicon.addEventListener("click",function(){
    sidenav.style.marginLeft="0"
})

closebtn.addEventListener("click",function(){
    sidenav.style.marginLeft="-60%"
})


document.querySelector("form").addEventListener("submit", function(e){

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let message = document.getElementById("message").value.trim();

if(name === "" || email === "" || message === ""){
    alert("Please fill all the fields");
    e.preventDefault(); // stop submit if empty
}
else{
    alert("Form Submitted Successfully ✅");
    // form will submit and page will refresh automatically
}

});
