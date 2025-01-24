Array.prototype.myFilter = function(cb) {
    for(let i = 0; i < this.length; i++) {
        if(cb(this[i], i, this)) {
            console.log(this[i])
        }
    }
}

const arr = [1, 2, 3, 4, 5];

arr.myFilter((it, i) => {
    return it > 2;
})