function isPalindrome(str) {
    if (str.length <= 1) {
      return true;
    } else {
      return str[0] === str[str.length - 1] && isPalindrome(str.slice(1, -1));
    }
  }
  
  console.log(isPalindrome("racecar")); 
  console.log(isPalindrome("hello"));  
  