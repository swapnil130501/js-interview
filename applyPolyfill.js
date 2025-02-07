Function.prototype.myApply = function(context, args) {
    if(typeof this !== 'function') {
        throw new Error('not a function');
    }

    context.fn = this;
    context.fn(...args);
}

const obj = {
    name: "Swapnil",
    test: function (lastName, age, desc) {
        console.log(this.name, lastName, age, desc);
    }
}

const obj2 = {
    name: "Saksham"
}

obj.test.myApply(obj2, ['Rajput', 24, 'SWE']);