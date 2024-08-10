function isPalindrome(x) {
    if (x < 0) return false;
    const str = x.toString();

    return str === str.split('').reverse().join('');
}


console.log(isPalindrome(121));
console.log(isPalindrome(-121)); 


function isPalindrome(x) {
    // Negative numbers are not palindromes
    if (x < 0) return false;
    
    // Convert number to string
    const str = x.toString();
    
    // Initialize two pointers
    let left = 0;
    let right = str.length - 1;
    
    // Use the two-pointer technique
    while (left < right) {
        // Check if characters at the current pointers are the same
        if (str[left] !== str[right]) {
            return false;
        }
        // Move pointers towards the center
        left++;
        right--;
    }
    
    // If all characters matched, it's a palindrome
    return true;
}

console.log(isPalindrome(121));   // Output: true
console.log(isPalindrome(-121));  // Output: false

