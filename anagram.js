function checkAnagram(str1, str2) {
    if(str1.length !== str2.length) {
        return false;
    }

    const sortStr = (str) => str.split('').sort().join('');

    return sortStr(str1) === sortStr(str2);
}

console.log(checkAnagram("silent", "listen"));