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