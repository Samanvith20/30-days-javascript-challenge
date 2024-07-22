let form=document.getElementById("Form")
form.addEventListener("submit",function(e){
    e.preventDefault()
    let input=document.getElementById("myInput")
    let inputValue=input.value
    console.log(inputValue);
})