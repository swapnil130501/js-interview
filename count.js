// function Count() {
//     let value = 0;

//     return function() {
//         value++;
//         console.log(value);
//         return value;
//     }
// }

// const count = Count();
// count();
// count();
// count();

// generally we get the inner function's reference back and we execute it but here in the problem statement we need to execute it withou creating a reference, execute it then and there
// iife helps us to solve this issue

const count = (function () {
    let value = 0;

    function cb () {
        value++;
        console.log(value);
        return value;
    };

    cb.reset = function () {
        value = 0;
    }

    return cb;
    
})();

count();
count();
count();
count.reset();
count();
count();
count();


// const count = (() => {
//     let value = 0;

//     function cb() {
//         value++;
//         console.log(value);
//         return value;
//     }

//     cb.reset = function () {
//         value = 0;
//     }

//     return cb;
// })();

// count()
// count()
// count()

// count.reset();

// count()
// count()
// count()
