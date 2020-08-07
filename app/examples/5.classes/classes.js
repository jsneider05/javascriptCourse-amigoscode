/* styling */
require('styles/main.scss');
/* js */
import { log, logTitle } from 'logger';
/* your imports */
logTitle('ES6 Classes');

/* Every single class has a constructor */
/* The constructor is a simple method that gets invoke every time you create
    an instance of a class */
/* If we want to define properties of animal, we can do it inside of our
    constructor, so when we create a instance of animal, we should pass this
    properties */
/* Static keyword allow us to create methods or properties that belong to the
    actual class and not to each individual object that we instanciated.
    It means that we dont have to create an instance to invoke the actual method */

class Animal {
  constructor(name, age) {
    log(`${name} is an animal and was created`);
    this.name = name;
    this.age = age;
  }

  static iAmStaticMethod() {
    log('I am a static method inside of an Animal class');
  }

  eat() {
    log(`${this.name} is eating`);
  }

  sleep() {
    log(`${this.name} is sleeping`);
  }

  wakeUp() {
    log(`${this.name} is waking up`);
  }

  logAge() {
    log(`${this.name} is ${this.age} ${this.age > 1 ? 'years' : 'year' } old`);
  }
}

/* Clasess inheritance */

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  logBreed() {
    log(`${this.name} is a ${this.breed}`);
  }
  /* Only for ilustration, dog inherite the methods too */
  logAgeFromDog() {
    super.logAge();
  }
}

class Cat extends Animal {
  constructor(name, age) {
    super(name, age)
  }

  logAgeFromCat() {
    super.logAge();
  }
}

const mike = new Dog('Mike', 4, 'Bulldog');
mike.logBreed();
mike.logAgeFromDog();
mike.logAge();

log('----------')

const josh = new Cat('Josh', 1);
josh.logAgeFromCat();
josh.eat();
josh.sleep();
josh.wakeUp();
josh.logAge();

/* 
Animal.iAmStaticMethod();

const bobby = new Animal('bobby', 2);
bobby.eat();
bobby.sleep();
bobby.wakeUp();
bobby.logAge();

log('------------');

const marshall = new Animal('marshall', 3);
marshall.eat();
marshall.sleep();
marshall.wakeUp();
marshall.logAge();
 */
