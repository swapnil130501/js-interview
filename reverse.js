let str = "swapnil";
console.log(str);

const rev = str.split('').reverse().join('');

console.log(rev);

function solve(s) {
    if(s == "") {
        return "";
    }

    return solve(s.substr(1)) + str.charAt(0);
}