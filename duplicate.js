const array = [1, 2, 3, 2, 4, 5, 4, 5];

const set = new Set();
const res = [];

array.forEach((it) => {
    if(!set.has(it)) {
        set.add(it);
    }
    else {
        res.push(it);
    }
})

console.log(res)