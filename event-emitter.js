class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(eventName, listener) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(listener);
    }

    emit(eventName, ...args) {
        const listeners = this.events[eventName];
        if (listeners) {
            listeners.forEach(listener => {
                listener.apply(null, args);
            });
        }
    }

    removeListener(eventName, listenerToRemove) {
        const listeners = this.events[eventName];
        if (listeners) {
            this.events[eventName] = listeners.filter(listener => listener !== listenerToRemove);
        }
    }

    removeAllListeners(eventName) {
        delete this.events[eventName];
    }
}

module.exports = EventEmitter;
