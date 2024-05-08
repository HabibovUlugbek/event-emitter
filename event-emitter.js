class EventEmitter {
    constructor() {
        this.events = {};
        this.maxListeners = 2;
    }

    on(eventName, listener) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(listener);
        if (this.events[eventName].length > this.maxListeners) {
            console.warn(`Max listeners (${this.maxListeners}) for event ${eventName} exceeded`);
        }
    }

    addListener(eventName, listener) {
        this.on(eventName, listener);
    }

    once(eventName, listener) {
        const onceWrapper = (...args) => {
            listener.apply(null, args);
            this.removeListener(eventName, onceWrapper);
        };
        this.on(eventName, onceWrapper);
    }

    emit(eventName, ...args) {
        const listeners = this.events[eventName];
        if (listeners) {
            listeners.forEach(listener => listener.apply(null, args));
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

    off(eventName, listener) {
        this.removeListener(eventName, listener);
    }

    listeners(eventName) {
        return this.events[eventName];
    }

    listenerCount(eventName) {
        return this.listeners(eventName).length;
    }

    eventNames() {
        return Object.keys(this.events);
    }

    getMaxListeners() {
        return this.maxListeners;
    }

    setMaxListeners(n) {
        this.maxListeners = n;
    }
}

module.exports = EventEmitter;
