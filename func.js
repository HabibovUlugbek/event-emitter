const EventEmitter = require('./event-emitter.js');

const eventEmitter = new EventEmitter();

// Define an event handler function
const eventHandler = () => {
    console.log('Event emitted!');
};

// Register the event handler function with the 'myEvent' event
eventEmitter.on('myEvent', eventHandler);
eventEmitter.on('myEvent', eventHandler);
eventEmitter.on('myEvent', eventHandler);


// Emit the 'myEvent' event
eventEmitter.emit('myEvent');
// Define another event handler function
const anotherEventHandler = () => {
    console.log('Another event emitted!');
};

// Register the anotherEventHandler function with the 'anotherEvent' event
eventEmitter.on('anotherEvent', anotherEventHandler);

// Emit the 'anotherEvent' event
eventEmitter.emit('anotherEvent');

// // Remove the event handler for the 'myEvent' event
// eventEmitter.off('myEvent', eventHandler);

// Emit the 'myEvent' event again
eventEmitter.emit('myEvent');