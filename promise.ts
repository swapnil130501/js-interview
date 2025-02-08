enum PromiseState {
    PENDING = 'pending',
    FULFILLED = 'fulfilled',
    REJECTED = 'rejected',
}

type TPromiseResolve = (value) => void;
type TPromiseReject = (value) => void;

type TPromiseExecutor = (resolve: TPromiseResolve, reject: TPromiseReject) => void;

type TPromiseThenCb = (value) => void;
type TPromiseCatchCb = (value) => void;
type TPromiseFinallyCb = () => void;

class MyPromise {
    private _state: PromiseState = PromiseState.PENDING;
    private _onFulfillmentArray: TPromiseThenCb[] = [];
    private _onRejectionArray: TPromiseCatchCb[] = [];
    private _finallyCb: TPromiseFinallyCb;
    private _value = undefined;

    constructor(executor: TPromiseExecutor) {
        executor(this._promiseResolver.bind(this), this._promiseRejector.bind(this));
    }

    public then(handlerCb: TPromiseThenCb) {
        return new MyPromise((resolve, reject) => {
            try {
                resolve();
            } catch (error) {
                reject(error);
            }
            if(this._state === PromiseState.FULFILLED) {
                handlerCb(this._value);
            }
    
            else {
                this._onFulfillmentArray.push(handlerCb);
            }
    
            return this;
        })
    }

    public catch(handlerCb: TPromiseCatchCb) {
        if(this._state === PromiseState.REJECTED) {
            handlerCb(this._value);
        }
        
        else {
            this._onRejectionArray.push(handlerCb);
        }

        return this;
    }

    public finally(handlerCb: TPromiseFinallyCb) {
        if(this._state !== PromiseState.PENDING) {
            return handlerCb();
        }

        this._finallyCb = handlerCb;
    }

    private _promiseResolver(value) {
        console.log("Inside promise resolver", this._state);
        if(this._state === PromiseState.FULFILLED) {
            return;
        }

        this._state = PromiseState.FULFILLED;
        this._value = value;
        console.log("Running callbacks", this._onFulfillmentArray);
        this._onFulfillmentArray.forEach((cb) => cb(value));
    }

    private _promiseRejector(value) {
        if(this._state === PromiseState.REJECTED) {
            return;
        }

        this._state = PromiseState.REJECTED;
        this._value = value;
        this._onRejectionArray.forEach((cb) => cb(value));
    }
}

const p1 = new MyPromise((res, rej) => {
    rej(10);
})

p1.then((value) => {
    console.log("promise resolved", value);
}).then((value) => {
    value = value + 10;
    console.log("promise resolved x2", value);
}).catch((value) => {
    console.log("promise rejected", value);
}).finally(() => {
    console.log("finally called")
})