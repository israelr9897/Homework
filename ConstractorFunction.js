//1
function Phone(brand, model){
    this.brand = brand;
    this.model = model;
    this.detalis = function(){
        console.log(`Phone: ${this.brand} ${this.model}`);
        
    }
}

const galexy = new Phone("Samsong", "S24");
const iphone = new Phone("Appel", "16 Pro");
galexy.detalis();
iphone.detalis();

//2
class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    area = function(){
        return this.width * this.height;
    } 
}
const a = new Rectangle(100,50);
const b = new Rectangle(50,25);
console.log(a.area());
console.log(b.area());

//3
function BankAccount(owner, balance){
    this.owner = owner;
    this.balance = balance;
    this.deposit = function(amount){
        this.balance += amount;
    }
    this.withdraw = function(amount){
        if(this.balance >= amount){
            this.balance -= amount;
        }
        else{
            console.log("Current balance is insufficient.");
            
        }
    }
    this.checkBalance = function(){
        console.log(`This Balance now: ${this.balance}`);
    }
}
const myAccount = new BankAccount("israel",100);
myAccount.checkBalance();
myAccount.deposit(150);
myAccount.checkBalance();
myAccount.withdraw(50);
myAccount.checkBalance();
const myAccount2 = new BankAccount("moshe",1000);
myAccount2.checkBalance();
myAccount2.deposit(150);
myAccount2.checkBalance();
myAccount2.withdraw(50);
myAccount2.checkBalance();

//4
function Animal(name){
    this.name = name;
    this.speak = function(){
        console.log(`${this.name} makes a sound`);
    }
}

function Dog(name){
    this.name = name;
    this.bark = function(){
        console.log(this.name + " bark");
    }
}
const r = new Animal();
const rocki = new Dog("rocki");
Object.setPrototypeOf(rocki, r);
rocki.speak();
rocki.bark();

//5
function Vehicle(type){
    this.type = type;
    this.describe = function(){
        console.log("This is a " + type);
    }
}

function Car(brand){
    this.brand = brand;
    this.info = function(){
        console.log(`This is a ${this.brand} ${this.type}`);
    }
}

const v = new Vehicle("car");
const bmw = new Car("BMW");
Object.setPrototypeOf(bmw, v);
bmw.describe();
bmw.info();

//6
function Shepe(){
    this.area = function(){
        return 0;
    }
}
function Circle(radius){
    this.radius = radius;
    this.area = function(){
        return Math.PI * (radius * radius);
    }
}
function Square(side){
    this.side = side;
    this.area = function(){
        return side * side;
    }
}
const cir = new Shepe();
const circle = new Circle(3);
const square = new Square(4);
Object.setPrototypeOf(circle, cir);
Object.setPrototypeOf(square, cir);
console.log(circle.area());
console.log(square.area());

//7
class Bookx{
    constructor(title, author){
        this.title = title;
        this.author = author;
    }
    info = function(){
        console.log(this.title +" by "+ this.author);
    }
}
const book = new Bookx("The Hobbit", "Tolkien") 
book.info();

//8
class Person{
    constructor(name){
        this.name = name;
    }
    greet = function(){
        console.log("Hello, I'm "+ this.name);
    }
}

class Student extends Person{
    constructor(name, school){
        super(name);
        this.school = school;
    }
    study = function(){
        console.log(`${this.name} is studying at ${this.school}`);
    }
}
const student = new Student("israel","Oxford");
student.greet();
student.study();

//9
class Employee{
    #salary;

    constructor(salary){
        this.#salary = salary;
    }
    getSalary = function(){
        return this.#salary;
    }
    work = function(){
        console.log("Employee is working");
    }
}

class Manager extends Employee{
    constructor(salary){super(salary)};
    work = function(){
        console.log("Manager is managing");
    }
}
const empl = new Employee(4000);
const manager = new Manager(5000);
console.log(empl.getSalary());
empl.work();
console.log(manager.getSalary());
manager.work();
