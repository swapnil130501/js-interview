var PromiseState;
(function (PromiseState) {
    PromiseState["PENDING"] = "pending";
    PromiseState["FULFILLED"] = "fulfilled";
    PromiseState["REJECTED"] = "rejected";
})(PromiseState || (PromiseState = {}));
var MyPromise = /** @class */ (function () {
    function MyPromise(executor) {
        this._state = PromiseState.PENDING;
        this._successCallbackHandlers = [];
        this._failureCallbackHandlers = [];
        this._finallyCallbackHandler = undefined;
        this._value = undefined;
        this._reason = undefined;
        executor(this._promiseResolver.bind(this), this._promiseRejector.bind(this));
    }
    MyPromise.prototype.then = function (handlerFn) {
        var _this = this;
        return new MyPromise(function (resolve, reject) {
            var processHandler = function () {
                try {
                    var result = handlerFn(_this._value);
                    if (result instanceof MyPromise) {
                        result.then(resolve).catch(reject);
                    }
                    else {
                        resolve(result);
                    }
                }
                catch (error) {
                    reject(error);
                }
            };
            if (_this._state === PromiseState.FULFILLED) {
                setTimeout(processHandler, 0);
            }
            else {
                _this._successCallbackHandlers.push(function () { return setTimeout(processHandler, 0); });
            }
        });
    };
    MyPromise.prototype.catch = function (handlerFn) {
        if (this._state === PromiseState.REJECTED) {
            handlerFn(this._reason);
        }
        else {
            this._failureCallbackHandlers.push(handlerFn);
        }
        return this;
    };
    MyPromise.prototype.finally = function (handlerFn) {
        if (this._state !== PromiseState.PENDING)
            return handlerFn();
        this._finallyCallbackHandler = handlerFn;
    };
    MyPromise.prototype._promiseResolver = function (value) {
        if (this._state === PromiseState.FULFILLED)
            return;
        this._state = PromiseState.FULFILLED;
        this._value = value;
        this._successCallbackHandlers.forEach(function (cb) { return cb(value); });
        if (this._finallyCallbackHandler)
            this._finallyCallbackHandler();
    };
    MyPromise.prototype._promiseRejector = function (reason) {
        if (this._state === PromiseState.REJECTED)
            return;
        this._state = PromiseState.REJECTED;
        this._reason = reason;
        this._failureCallbackHandlers.forEach(function (cb) { return cb(reason); });
        if (this._finallyCallbackHandler)
            this._finallyCallbackHandler();
    };
    return MyPromise;
}());
var p1 = new MyPromise(function (resolve, reject) {
    setTimeout(function () { return resolve(42); }, 1000);
});
p1
    .then(function (value) {
    console.log('Resolved with:', value); // Output: Resolved with: 42
    return value + 10;
})
    .then(function (value) {
    console.log('Chained result:', value); // Output: Chained result: 52
})
    .catch(function (error) {
    console.error('Caught error:', error);
})
    .finally(function () {
    console.log('Finally block executed');
});
