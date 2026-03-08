let bio = document.getElementById("bio")
let counter = document.getElementById("counter")

let maxLength = 200

bio.addEventListener("input", function(){

let currentLength = bio.value.length

counter.textContent = currentLength + " / " + maxLength + " characters"

if(currentLength >= maxLength){
counter.style.color = "red"
}else{
counter.style.color = "black"
}

})