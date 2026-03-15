var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closebtn = document.getElementById("side-navbar-close")

menuicon.addEventListener("click",function(){
    sidenav.style.marginLeft="0"
})

closebtn.addEventListener("click",function(){
    sidenav.style.marginLeft="-60%"
})

let filters = document.querySelectorAll(".filter-checkbox");
let products = document.querySelectorAll(".product-card");

filters.forEach(function(filter){

filter.addEventListener("change", function(){

let selected = [];

filters.forEach(function(box){
if(box.checked){
selected.push(box.value);
}
});

products.forEach(function(product){

let category = product.dataset.category;

if(selected.length === 0){
product.style.display = "block";
}
else if(selected.includes(category)){
product.style.display = "block";
}
else{
product.style.display = "none";
}

});

});

});