let saveBtn=document.getElementById("saveBtn")

saveBtn.addEventListener("click",function(){

let name=document.getElementById("name").value
let age=document.getElementById("age").value
let email=document.getElementById("email").value
let course=document.getElementById("course").value
let gender=document.querySelector('input[name="gender"]:checked').value

let tr=document.createElement("tr")

tr.innerHTML=`
<td>${name}</td>
<td>${age}</td>
<td>${course}</td>
<td>${gender}</td>
<td>${email}</td>
<td><button class="delete">Delete</button></td>
`

document.getElementById("tableBody").append(tr)

tr.querySelector(".delete").addEventListener("click",function(){
tr.remove()
})

})