// [1, 2, 3, 4, 5], size = 2 ---> [[1, 2], [3, 4], [5]];

function chunk(arr, size) {
    let res = [];
    let temp = [];
    for(let i = 0; i < arr.length; i++) {
        temp.push(arr[i]);

        if(temp.length >= size || i == arr.length - 1) {
            res.push(temp);
            temp = [];
        }
    }

    return res;
}

const arr = [1, 2, 3, 4, 5];
console.log(chunk(arr, 3));

function optimizedChunk(arr, size) {
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

console.log(optimizedChunk(arr, 3));