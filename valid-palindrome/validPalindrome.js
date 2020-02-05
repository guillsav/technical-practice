/*
Valid Palindrome

Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: 'A man, a plan, a canal: Panama
Output: true

Example 2:

Input: 'race a car'
Output: false
*/

function isPalindrome(s) {
    s = s.toLowerCase().replace(/[\W_]/g, '');

    let start = 0;
    let end = s.length - 1;

    while (start <= end) {
        if (s[start] !== s[end]) return false;
        start++;
        end--;
    }
    return true;
}

console.log(isPalindrome('lol'));
