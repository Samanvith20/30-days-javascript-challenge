let dropdowun=document.getElementById("dropdown")
let selectedValue=document.getElementById("selectedValue")
dropdowun.addEventListener("change",function(e){
    let selected=e.target.value
    selectedValue.innerText=`Selected value: ${selected}`;

})