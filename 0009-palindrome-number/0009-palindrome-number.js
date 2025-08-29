/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

   // Negative numbers are not palindromes
    if (x < 0) return false;

    // Convert number to string
    let str = x.toString();
    
    // Reverse the string
    let reversed = str.split("").reverse().join("");
    
    // Compare original string with reversed
    return str === reversed;
    
};