function deepCopy(val) {
    if (typeof val !== 'object' || val === null) {
        return val;
    }
    if (Array.isArray(val)) {
        return val.map(deepCopy);
    }
    const copy = {};
    for (const key in val) {
        copy[key] = deepCopy(val[key]);
    }
    return copy;
}

const arr = [1, 2, 3, 4, 5];

const arr2 = deepCopy(arr);
arr2[0] = 1000;

console.log(arr)

const obj = {
    a: 1,
    b: {
        c: 2,
    }
}

const obj2 = deepCopy(obj); // deep copy

const obj3 = obj; // shallow copy
obj2.b.c = 1000;

console.log(obj)