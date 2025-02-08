Promise.myRace = function (arr) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(arr) || arr.length === 0) {
            return;
        }

        arr.forEach((promise) => {
            promise.then((value) => {
                resolve(value);
            }).catch(() => {
                reject(value);
            })
        });
    });
};

const p1 = new Promise((res) => setTimeout(res, 1000, "P1 resolved"));
const p2 = new Promise((res) => setTimeout(res, 200, "P2 resolved"));
const p3 = new Promise((res) => setTimeout(res, 5000, "P3 resolved"));

Promise.myRace([p1, p2, p3])
    .then(console.log)
    .catch(console.error);
