const Elevator = require('./elevator.js');
const Person = require('./person.js');

let elevator = new Elevator();

let alex = new Person('Alex', 2, 8);

elevator.start();
elevator.call(alex);
