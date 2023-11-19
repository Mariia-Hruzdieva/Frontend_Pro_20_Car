class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };
    personInfo() {
        const info = this.name + ', ' + this.age + ' років';

        return info;
    }
    personInfoToConsonle() {
        console.log(this.personInfo());
    }
};

class Car {
    owner;
    constructor(carBrand, carModel, yearOfProduction, color) {
        this.carBrand = carBrand;
        this.carModel = carModel;
        this.yearOfProduction = yearOfProduction;
        this.color = color;
    }
    setOwner(person) {
        if (person.age < 18) {
            console.log(person.personInfo() + '- вік менше 18, не може бути власником.');
            return;
        }

        this.owner = person;
    }
    carInfo() {
        let personInfoStr = '-';
        if (this.owner !== undefined) {
            personInfoStr = this.owner.personInfo();
        }

        let carInfoStr = `Марка авто ${this.carBrand} 
        Модель авто ${this.carModel} 
        Рік випуску авто ${this.yearOfProduction} 
        Колір авто ${this.color} 
        Власник авто ${personInfoStr}`;

        console.log(carInfoStr);
    };
}


let person1 = new Person('Ann', 20);
let person2 = new Person('Peter', 25);
let person3 = new Person('John', 17);

let car1 = new Car('Audi', 'A6', 2006, 'red');
let car2 = new Car('BMW', 'x5', 2020, 'grey');
let car3 = new Car('Toyota', 'Carina', 1999, 'white');

car1.setOwner(person1);
car2.setOwner(person2);
car3.setOwner(person3);

car1.carInfo();
car2.carInfo();
car3.carInfo();