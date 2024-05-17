class Vehicle {
    constructor(make, model, year) {
        // console.log(this);
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return "Beep."
    }
    toString() {
        return `The vehicle is a ${this.year} ${this.make} ${this.model}.`
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine() {
        return "VROOOM!!!"
    }
}

class Garage {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }
    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) { // not a vehicle
            return "Only Vehicles are allowed in here!"
        } else if (this.vehicles[1]) { // garage is full
            return "Sorry, we're full!"
        } else { // vehicle added
            this.vehicles.push(newVehicle);
            return "Vehicle added!"
        }
    }
}