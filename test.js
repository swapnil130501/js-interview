function chunk(arr, size) {
    if (size <= 0) {
        throw new Error("Size must be a positive integer");
    }

    const res = [];

    for (let i = 0; i < arr.length; i += size) {
        res.push(arr.slice(i, i + size));
    }

    return res;
}

function chunk2(arr, size) {
    const res = [];
    let chunks = [];

    for (let i = 0; i < arr.length; i++) {
        
        if (chunks.length === size) {
            res.push(chunks);
            chunks = [];
        }

        chunks.push(arr[i]);
    }

    if (chunks.length > 0) {
        res.push(chunks);
    }

    return res;
}

/*
[1, 2, 3, 4, 5] 2 
[[1, 2], [3, 4], [5]]
*/
arr = [1, 2, 3, 4, 5]
console.log(chunk2(arr, 2))
