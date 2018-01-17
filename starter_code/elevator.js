class Elevator {
  constructor(){
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.waitingList = [];
    this.passengers = [];
    this.direction = 'up';
    this.destination = [];
  }

  start() { 
    setInterval( () => {
      this.update();
    }, 1000);
  }

  stop() { 
    clearInterval();
  }

  update() { 
    this.log();
    this.floorUp();
    this.floorDown();
    this._passengersEnter();
    this._passengersLeave();
  }   

  _passengersEnter() {
    this.requests.forEach( (floor) => {
      if (this.floor == floor) {
        this.passengers.push(this.waitingList[0]);
        console.log(
          `${this.passengers[0]} has enter the elevator`
        );
        this.waitingList.splice(0, 1);
        this.requests.splice(0, 1);
      }
    });
  }
  _passengersLeave() { 
    this.destination.forEach( (destination) => {
      if (this.floor == destination) {
        console.log(
          `${this.passengers[0]} has left the elevator`
        );
        this.passengers.splice(0, 1);
        this.destination.splice(0, 1);
      }
    });
  }
  
  floorUp() { 
    if (this.direction == 'up' && this.floor < this.MAXFLOOR) {
      this.floor++;
    } else {
      this.direction = 'down';
    }
  }
  
  floorDown() { 
    if (this.direction == 'down' && this.floor > 0) {
     this.floor--; 
    } else {
      this.direction = 'up';
    }
  }
  
  call(person) { 
    this.waitingList.push(person.name);
    this.requests.push(person.originFloor);
    this.destination.push(person.destinationFloor);
  }
  
  log() { 
    console.log(
      `Direction: ${this.direction} | Floor: ${this.floor}`,
      `| Waiting: ${this.waitingList} | Request floor: ${this.requests}`,
      `| Passengers: ${this.passengers} | Destination: ${this.destination}`
    );
  }
}

module.exports = Elevator;
