
// Static Method on class example
class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }

    static setName (person, name) {
        person.name = name;
    }
}

const person = new Person('bob', 20);
Person.setName(person, 'Mike');
person

// exercise 
class MyCar {
    constructor (speed, value) {
        this.speed = speed;
        this.value = value;
    }
    
    static getSpecs (car) {
        // TODO: this should return a string with the value and speed of the car object passed in
          return `${car.value} and ${car.speed}`
    }
}


// Extend with Super exercise

class Car {
    constructor (speed) {
        this.speed = speed;
    }
    
    toString () {
        return `this car is slow; it only moves at ${car.speed} MPH`;
    }

    static getSpecs (car) {
        // TODO: this should return a string with the value and speed of the car object passed in
        return `${car.value} and ${car.speed}`
    }
}

class Porche911 extends Car {
    constructor () {
        // TODO: Call the super constructor to pass a FAST speed of 100
        super(100);

    }    
    toString () {
        // TODO: overwrite the existing toString method to have it return 
        // 'this car is FAST'
         return `this car is FAST`;
    }
}

const procha = new Porche911();
procha;
console.log(procha.toString());


// Getter Setter Exercise

class MCar {
    constructor(value) {
        this._value = value;
    }
    
    get value () {
        // TODO: return the value with 2000 added to it due to how awesome your car became after you bought it
        return this._value + 2000;
    }
    
    set value (value) {
        // TODO: set _value to the value set in minus 1000 due to sales expenses
        this._value = value - 1000;
    }
}



