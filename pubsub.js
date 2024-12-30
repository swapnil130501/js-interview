// Implement a pubsub library that can be readily plugged anywhere and used. 
// subcribe function - Event ----> returns f, if you call f then you will unsubscribed
// publish -> event, data
var PubSub = /** @class */ (function () {
    function PubSub() {
        this._eventList = {};
    }
    PubSub.prototype.subscribe = function (event, eventCb) {
        var _this = this;
        if (!this._eventList[event]) {
            this._eventList[event] = []; // create a new array if the event is not present in the eventList array
        }
        this._eventList[event].push(eventCb);
        return function () {
            _this._eventList[event] = _this._eventList[event].filter(function (it) { return it !== eventCb; });
        };
    };
    PubSub.prototype.publish = function (event, data) {
        if (!this._eventList[event]) {
            return;
        }
        this._eventList[event].forEach(function (cb) { return cb(data); });
    };
    return PubSub;
}());
var pubsub = new PubSub();
var messageTopic = pubsub.subscribe('onClick', function (data) {
    console.log("onClick event received", data);
});
setInterval(function () {
    pubsub.publish('onClick', { id: 1, data: 'Test' });
}, 3000);
