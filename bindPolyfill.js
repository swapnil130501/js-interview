Function.prototype.myBind = function (context, ...args) {
    return (...newArgs) => {
        if(typeof this !== 'function') {
            throw new Error('not a function');
        }

        context.fn = this;
        context.fn(...args, ...newArgs);
    }
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

const res = obj.test.myBind(obj);
res('Rajput', '24', 'SWE');