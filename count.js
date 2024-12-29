// function count() {
//     let value = 0;

//     return function() {
//         value++;
//         console.log(value);
//         return value;
//     }
// }

// const counter = count();
// counter();
// counter();
// counter();

const count = (() => {
    let value = 0;

    function cb() {
        value++;
        console.log(value);
        return value;
    }

    cb.reset = function () {
        value = 0;
    }

    return cb;
})();

count()
count()
count()

count.reset();

count()
count()
count()
