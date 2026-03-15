var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closebtn = document.getElementById("side-navbar-close")

menuicon.addEventListener("click",function(){
    sidenav.style.marginLeft="0"
})

closebtn.addEventListener("click",function(){
    sidenav.style.marginLeft="-60%"
})