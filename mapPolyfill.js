Array.prototype.myMap = function(cb) {
    let res = [];
    for(let i = 0; i < this.length; i++) {
        res.push(cb(this[i], i, this));
    }

    return res;
}

const arr = [1, 2, 3, 4, 5];
const x = arr.myMap((it, i, arr) => {
    return it * 2;
})

console.log(x)