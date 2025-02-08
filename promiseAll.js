Promise.myAll = function (arr) {
    const res = [];
    let counter = 0;

    return new Promise((resolve, reject) => {
        arr.forEach((promise, index) => {
            promise.then((value) => {
                counter++;
                res[index] = value;

                if(counter === arr.length) {
                    resolve(res);
                }
            }).catch((error) => {
                reject(error);
            })
        });
    })
}

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise1")
    }, 1000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise2")
    }, 1000)
})

Promise.myAll([p1, p2]).then((value) => {console.log(value)}).catch(() => {});