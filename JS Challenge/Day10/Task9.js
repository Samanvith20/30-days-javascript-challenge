let ul=document.getElementById("myList")
ul.addEventListener("click",function(e){
    let target=e.target
    if(target.tagName==="LI"){
        console.log(`Clicked item: ${e.target.textContent}`);
    }
})