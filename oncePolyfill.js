function once(fn, context) {
    let flag = true;

    return function (...args) {
        if (flag) {
            fn.apply(context || this, args);
            flag = false;
        }
    };
}

function hello(name) {
    console.log('hello', name);
}

const onceHello = once(hello);
onceHello('SWE', 23);
onceHello('swapnil');
onceHello('again');
