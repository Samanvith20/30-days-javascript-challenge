
function reversestring(str){
  if(str.length==0) return ""
  else{
      return reversestring(str.slice(1))+str[0]
  }
}

 console.log(reversestring("hello")); 