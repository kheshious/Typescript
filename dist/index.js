"use strict";
//Basic Types
Object.defineProperty(exports, "__esModule", { value: true });
let id = 5;
let company = 'Standardbank';
let isPublished = true;
let x = 'Hello';
let ids = [];
let strs = ['Jabu', 'Jacob', 'Lethabo'];
let vals = [2, 8, 9];
//Tuple takes values of different data types
let person = [1, 'Boka', true];
//Tuple Array
let employee;
employee = [
    [1, 'kat'],
    [2, 'boka']
];
//Union - holds more than one type
let num = '22';
//enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
const user = {
    iD: 1,
    name: 'Boka',
    surname: 'Tlou'
};
console.log('your name :', user.name);
function Value(arg0) {
    return String(arg0);
}
//Type Assertion - Casting some sort
let cid = '1';
const customerId = cid;
// const customerId = <number>cid
// Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(15, 20));
//void
function log(message) {
    console.log(message);
}
log('Kitty');
const user1 = {
    iD: 1,
    name: 'Boka',
    surname: 'Tlou'
};
const add = (x, y) => x + y;
//Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} hfddfgghhhgg ${this.id}`;
    }
}
const brad = new Person(1, 'kat');
console.log(brad);
console.log(brad.register());
