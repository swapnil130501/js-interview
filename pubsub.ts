// Implement a pubsub library that can be readily plugged anywhere and used. 
// subcribe function - Event ----> returns f, if you call f then you will unsubscribed
// publish -> event, data

class PubSub {
    private _eventList : { [key: string]: Array<(data: any) => void> } = {}

    public subscribe(event: string, eventCb: (data: any) => void): () => void {
        if(!this._eventList[event]) {
            this._eventList[event] = []; // create a new array if the event is not present in the eventList array
        }

        this._eventList[event].push(eventCb);

        return () => {
            this._eventList[event] = this._eventList[event].filter(it => it !== eventCb);
        }
    }

    public publish(event: string, data: any): void {
        if(!this._eventList[event]) {
            return;
        }

        this._eventList[event].forEach((cb) => cb(data));
    }
}

const pubsub = new PubSub();

const messageTopic = pubsub.subscribe('onClick', (data) => {
    console.log("onClick event received", data)
});

setInterval(() => {
    pubsub.publish('onClick', { id: 1, data: 'Test' })
}, 3000)