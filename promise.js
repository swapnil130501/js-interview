var PromiseState;
(function (PromiseState) {
    PromiseState["PENDING"] = "pending";
    PromiseState["FULFILLED"] = "fulfilled";
    PromiseState["REJECTED"] = "rejected";
})(PromiseState || (PromiseState = {}));
var MyPromise = /** @class */ (function () {
    function MyPromise(executor) {
        this._state = PromiseState.PENDING;
        this._onFulfillmentArray = [];
        this._onRejectionArray = [];
        this._value = undefined;
        executor(this._promiseResolver.bind(this), this._promiseRejector.bind(this));
    }
    MyPromise.prototype.then = function (handlerCb) {
        if (this._state === PromiseState.FULFILLED) {
            handlerCb(this._value);
        }
        else {
            this._onFulfillmentArray.push(handlerCb);
        }
        return this;
    };
    MyPromise.prototype.catch = function (handlerCb) {
        if (this._state === PromiseState.REJECTED) {
            handlerCb(this._value);
        }
        else {
            this._onRejectionArray.push(handlerCb);
        }
        return this;
    };
    MyPromise.prototype.finally = function (handlerCb) {
        if (this._state !== PromiseState.PENDING) {
            return handlerCb();
        }
        this._finallyCb = handlerCb;
    };
    MyPromise.prototype._promiseResolver = function (value) {
        console.log("Inside promise resolver", this._state);
        if (this._state === PromiseState.FULFILLED) {
            return;
        }
        this._state = PromiseState.FULFILLED;
        this._value = value;
        console.log("Running callbacks", this._onFulfillmentArray);
        this._onFulfillmentArray.forEach(function (cb) { return cb(value); });
    };
    MyPromise.prototype._promiseRejector = function (value) {
        if (this._state === PromiseState.REJECTED) {
            return;
        }
        this._state = PromiseState.REJECTED;
        this._value = value;
        this._onRejectionArray.forEach(function (cb) { return cb(value); });
    };
    return MyPromise;
}());
var p1 = new MyPromise(function (res, rej) {
    rej(10);
});
p1.then(function (value) {
    console.log("promise resolved", value);
}).then(function (value) {
    value = value + 10;
    console.log("promise resolved x2", value);
}).catch(function (value) {
    console.log("promise rejected", value);
}).finally(function () {
    console.log("finally called");
});
