let input=document.getElementById("myInput")
let paragraph=document.getElementById("paragraph")
input.addEventListener("keyup",function(e){
    paragraph.innerText=e.target.value
})