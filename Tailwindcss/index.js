let sidenav = document.getElementById("sidenav")
let close = document.getElementById("close")
let menu = document.getElementById("menuicon")

menu.addEventListener("click",function(){
    sidenav.style.right=0
});

close.addEventListener("click",function(){
sidenav.style.right ="-50%"
})