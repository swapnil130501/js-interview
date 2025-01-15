function checkPalindrome(str) {
    const revStr = str.split('').reverse().join('');
    return str === revStr;
}

console.log(checkPalindrome("nitin"));