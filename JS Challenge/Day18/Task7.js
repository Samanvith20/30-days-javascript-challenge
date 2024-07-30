
// Revision

function longestUniqueSubstringLength(s) {
    let n = s.length;
    let maxLength = 0;
    let left = 0;
    let right = 0;
    let charSet = new Set();

    while (right < n) {
        if (!charSet.has(s[right])) {
            charSet.add(s[right]);
            right++;
            maxLength = Math.max(maxLength, right - left);
        } else {
            charSet.delete(s[left]);
            left++;
        }
    }
    return maxLength;
}

let str = "abcabcbb";
console.log(longestUniqueSubstringLength(str)); // Output: 3

str = "bbbbb";
console.log(longestUniqueSubstringLength(str)); // Output: 1

str = "pwwkew";
console.log(longestUniqueSubstringLength(str)); // Output: 3
