let sidenav = document.getElementById("sidenav")
let close = document.getElementById("close")
let menu = document.getElementById("menuicon")

menu.addEventListener("click",function(){
    sidenav.style.right=0
});

close.addEventListener("click",function(){
sidenav.style.right ="-50%"
})

//product search 

let productsearch = document.getElementById("product-container")

let search = document.getElementById("search")

let productlist = productsearch.querySelectorAll("div")

console.log(productsearch)

search.addEventListener("keyup", function () {

    let enteredValue = search.value.toUpperCase()

    for (count = 0; count < productlist.length; count++) {

        let productname = productlist[count].querySelector("h1").textContent

        if (productname.toUpperCase().indexOf(enteredValue) < 0) {
            productlist[count].style.display = "none"
        } else {
            productlist[count].style.display = "block"
        }

    }

})