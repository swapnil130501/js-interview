type TPromiseResolve<T> = (value: T) => void;
type TPromiseReject<T> = (reason: T) => void;

type TPromiseExecutor<T, K> = (
  resolve: TPromiseResolve<T>,
  reject: TPromiseReject<K>
) => void;

type TPromiseThenCallback<T> = (value: T | undefined) => void;
type TPromiseCatchCallback<T> = (reason: T | undefined) => void;
type TPromiseFinallyCallback = () => void;

enum PromiseState {
    PENDING = 'pending',
    FULFILLED = 'fulfilled',
    REJECTED = 'rejected',
}

class MyPromise<T, K> {
    private _state: PromiseState = PromiseState.PENDING;

    private _successCallbackHandlers: TPromiseThenCallback<T>[] = [];
    private _failureCallbackHandlers: TPromiseCatchCallback<K>[] = [];
    private _finallyCallbackHandler: TPromiseFinallyCallback | undefined = undefined;

    private _value: T | undefined = undefined;
    private _reason: K | undefined = undefined;

    constructor(executor: TPromiseExecutor<T, K>) {
        executor(
            this._promiseResolver.bind(this),
            this._promiseRejector.bind(this)
        );
    }

    public then<V>(
        handlerFn: (value: T | undefined) => V | MyPromise<V, K>
    ): MyPromise<V, K> {
        return new MyPromise<V, K>((resolve, reject) => {
            const processHandler = () => {
                const result = handlerFn(this._value);
                if (result instanceof MyPromise) {
                    result.then(resolve).catch(reject);
                } else {
                    resolve(result as V);
                }
            };
    
            if (this._state === PromiseState.FULFILLED) {
                setTimeout(processHandler, 0);
            } else {
                this._successCallbackHandlers.push(() => setTimeout(processHandler, 0));
            }
        });
    }
    

    public catch(handlerFn: TPromiseCatchCallback<K>) {
        if (this._state === PromiseState.REJECTED) {
            handlerFn(this._reason);
        } else {
            this._failureCallbackHandlers.push(handlerFn);
        }

        return this;
    }

    public finally(handlerFn: TPromiseFinallyCallback) {
        if (this._state !== PromiseState.PENDING) return handlerFn();
        this._finallyCallbackHandler = handlerFn;
    }

    private _promiseResolver(value: T) {
        if (this._state === PromiseState.FULFILLED) return;
        this._state = PromiseState.FULFILLED;
        this._value = value;
        this._successCallbackHandlers.forEach((cb) => cb(value));
        if (this._finallyCallbackHandler) this._finallyCallbackHandler();
    }

    private _promiseRejector(reason: K) {
        if (this._state === PromiseState.REJECTED) return;
        this._state = PromiseState.REJECTED;
        this._reason = reason;
        this._failureCallbackHandlers.forEach((cb) => cb(reason));
        if (this._finallyCallbackHandler) this._finallyCallbackHandler();
    }
}

const p1 = new MyPromise<number, string>((resolve, reject) => {
    setTimeout(() => resolve(42), 1000);
  });
  
  p1
    .then((value) => {
      console.log('Resolved with:', value); // Output: Resolved with: 42
      return value! + 10;
    })
    .then((value) => {
      console.log('Chained result:', value); // Output: Chained result: 52
    })
    .catch((error) => {
      console.error('Caught error:', error);
    })
    .finally(() => {
      console.log('Finally block executed');
    });
  