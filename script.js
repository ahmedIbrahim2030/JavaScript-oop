'use strict';
/*

//constructor function starts with captial letter
const Person = function(firstName, birthYear, ){
    this.firstName = firstName;
    this.birthYear = birthYear;
    //Never create method inside constrcutor function
    // this.calcAge = ()=>{
    //     console.log(2037 - this.birthYear);
    // };
};

const ahmed =  new Person('Ahmed', 2003);
console.log(ahmed);
Person.hey = function(){
    console.log('Hey there ');
    console.log(this);
    
};

Person.hey();

*/

/*
//1. new {} is created
//2. functions is created, this = {}
//3. {} linked to prototype
//4. function automatically return {}

const moahmed = new Person('moahamed', 2017);
const jack = new Person('jack', 1975);
console.log(moahmed);
console.log(moahmed, ahmed);

console.log(ahmed instanceof Person);

//prototypes

Person.prototype.calcAge = function (){
     console.log(2037 - this.birthYear);
};

ahmed.calcAge();

console.log(ahmed.__proto__);
console.log(ahmed.__proto__  === Person.prototype);
console.log(Person.prototype);


console.log(Person.prototype.isPrototypeOf(ahmed));
console.log(Person.prototype.isPrototypeOf(moahmed));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototypeOfLinkedObjects

Person.prototype.species = 'HOMO Sapiens';

console.log(ahmed.species, moahmed.species);

console.log(ahmed.hasOwnProperty('firstName'));




console.log(ahmed.__proto__);
//Object.prototype (top of prototype chain)
console.log(ahmed.__proto__.__proto__);
console.log(ahmed.__proto__.__proto__.__proto__);
console.dir(Person.prototype.constructor);


const arr = [3, 5,4,42,2234,]; // new Array === []

console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function(){
return [...new Set(this)];
};


console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x +1);
*/

//CHALLENGE #1

/*
const Car =function (speed, make) {
this.speed = speed;
this.make= make;
};
Car.prototype.accelerate = function(){
    this.speed += 10;
console.log(`${this.make} is going at ${this.speed}`);
}
Car.prototype.brake = function(){
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}`);
    
}
const bmw = new Car(120, "BMW");
const mercedes = new Car("Mercedes", 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
*/

//Class expression

// PersonCl = class {};


//class declaration



//CHALLENGE #2

/*

class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    accelerate(){
        this.speed +=10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }
    brake(){
        this.speed -=5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }
    get speedUS(){
        return this.speed / 1.6;
    }
set speedUS(speed){
    this.speed = speed * 1.6;
}
}
const ford = new CarCl("Ford", 120);
console.log(ford.speedUS);
ford.accelerate();
ford.brake();
ford.speed = 50;
console.log(ford);
*/
/*

const Person = function(firstName, birthYear){
    this.birthYear = birthYear;
    this.firstName = firstName;
}
Person.prototype.clacAge = function(){
    console.log(2037 - this.birthYear);
}
const Student = function(firstName, birthYear, course){
Person.call(this,firstName, birthYear);
this.course = course;
}

//Linking Prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function(){
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}
const mike = new Student("Mike", 2020, "Computer Science");

mike.introduce();
mike.clacAge();

console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);


Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor); 

*/

//Challenge #3

/*
const Car = function (speed, make) {
  this.speed = speed;
  this.make = make;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}`);
};

Car.prototype.brake = function(){
    this.speed -=5;
    console.log(`${this.make} is going at ${this.speed}`);
};


const EV = function(make, speed, charge){
Car.call(this, speed, make);
this.charge = charge;
};
//Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function(chargeTo){
    this.chargeTo = chargeTo;
}

// EV.prototype.accelerate = function(){
// this.speed +=20;
// this.charge--;
// console.log(`${this.make} is going at ${this.speed} km/h, with charge of ${this.charge}`);
 
// };

const tesla = new EV("Tesla", 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake()
tesla.accelerate();
*/

//Static method 

/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //Methods will be added to .prototype property
  caclAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.fullName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }
  //Set a proprty that already exists
  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name`);
  }
  get fullName() {
    return this._fullName;
  }
  //Static method
  static hey() {
    console.log("Hey there");
  }
}
class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course){
        //Always needs to happen first
        super(fullName, birthYear)
        this.course = course
    }
introduce(){
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
}

caclAge(){
    console.log(`I'm ${2037 - this.birthYear} years old, but as a student I feel more like ${2037 - this.birthYear + 10}`);
    
}

} 

const martha = new StudentCl("Martha jones", 2012, 'Computer Science');
martha.introduce()
martha.caclAge();

*/





// const martha = new StudentCl("Martha jones", 2012, "Computer Science");


/*
const jessica = new PersonCl("Jessica Davis", 1996);
console.log(jessica);
jessica.caclAge();

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function(){
//     console.log(`Hey ${this.firstName}`);
// };

jessica.greet();
console.log(jessica.age);
jessica.fullName = "Ahmed Adel ";
jessica.greet();

// 1.classed are not hoisted
// 2.class are first-class citizens
// 3.class are executed in strict mode

const walter = new PersonCl("Walter White", 1995);

const account = {
  owner: "Ahmed",
  movements: [200, 530, 120, 300],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;

console.log(account.movements);
jessica.fullName = "Ahmed Adel";
PersonCl.hey();

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = "Steven";
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);

sarah.init("Sarah", 1997);
sarah.calcAge();
*/
/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const steven = Object.create(PersonProto);
const StudentProto = Object.create(PersonProto);
StudentProto.init = function(firstName, birthYear, course){
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function(){
  console.log(`My name is ${this.fullName} and I study ${this.course}`);
}

const jay = Object.create(StudentProto);
jay.init("Jay", 2010, 'computer Science');
jay.introduce();
jay.calcAge();

*/
//Encapsulation: private class fields and Methods

//1) Public fields
//2) Private fields
//3) Public Mthods
//4)Private methods
//STATIC version of these 4


/*
class Account {
   locale = navigator.language;
   bank = 'Bankist';
   #movement = [];
   #pin;
  constructor(owner, curreny, pin){
    this.owner = owner;
    this.curreny = curreny;
    this.#pin = pin;

    // this.movements = [];
    // this.local = navigator.language;

    console.log(`Thank for opening an account, ${owner}`);
  }
  //Public interface (API)
  getMovements(){
    return this.#movement;
    //Not chainable
  }
  deposit(val){
    this.#movement.push(val);
    return this;
  }
  withdraw(val){
    this.deposit(-val);
    return this;
  }
  #approveLoan(val){
    //fake method
  return true;
  }
  requestLoan(val){
    
    if(this.#approveLoan(val)){
      this.deposit(val);
      console.log(`Loan approved`);
      
    }
    return this;
  }
  static test(){
    console.log('Test');
    
  }
}
const acc1 = new Account("Jonas", 'Eur', 1111);
// console.log(acc1);
// acc1.movements.push(250);
// acc1.movements.push(-140);
// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000);
// acc1.approveLoan(1000);

// console.log(acc1);
// console.log(acc1.pin);

console.log(acc1);
// acc1.deposit(300);
// acc1.withdraw(100);
// console.log(acc1.movements);

const movements = acc1
.deposit(300)
.withdraw(100)
.withdraw(50)
.requestLoan(25000)
.withdraw(400)
.getMovements();
console.log(acc1);
console.log(movements);
*/
///////////////////////////////////////////////////////
// Coding challenge #4


class CarCl {
  constructor(make, speed){
    this.make = make;
    this.speed = speed;
  }
  accessor(){
    this.speed +=10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    
  }
  brake(){
    this.speed -=5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    
  }

  getSpeedUS (){
    return this.speed / 1.6;
  }
  set speedUS(speed){
    this.speed = speed * 1.6;
  }
}
class EV extends CarCl{
  
}








