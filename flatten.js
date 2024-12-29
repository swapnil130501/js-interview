// const nums = [1, 2, [3, 4], [5, 6, 7]];

// function flattenArray(nums) {
//     const res = [];

//     for(let i = 0; i < nums.length; i++) {
//         if(typeof nums[i] == 'number') {
//             res.push(nums[i]);
//         }

//         else {
//             res.push(...flattenArray(nums[i]));
//         }
//     }

//     return res;
// }

// const res = flattenArray(nums);
// console.log(res);

// const nums = [1, 2, [3, 4], { key: 'value' }, [5, 6, [7, 8]], 'string'];

// function flattenArray(nums) {
//     const res = [];

//     for (let i = 0; i < nums.length; i++) {
//         if (typeof nums[i] === 'number') {
//             res.push(nums[i]);
//         } 
        
//         else if (Array.isArray(nums[i])) {
//             res.push(...flattenArray(nums[i]));
//         }
//     }

//     return res;
// }

// const res = flattenArray(nums);
// console.log(res);

const nums = [1, 2, [3, 4], { key: 'value' }, [5, 6, [7, 8]], 'string'];

function flattenArray(nums) {
    const res = [];

    for (let i = 0; i < nums.length; i++) {
        if(Array.isArray(nums[i])) {
            res.push(...flattenArray(nums[i]));
        }

        else {
            res.push(nums[i])
        }
    }

    return res;
}

const res = flattenArray(nums);
console.log(res);