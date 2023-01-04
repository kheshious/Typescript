//Basic Types

import { createEmitAndSemanticDiagnosticsBuilderProgram, createModuleResolutionCache } from "typescript";

let id: number = 5;
let company: string = 'Standardbank';
let isPublished: boolean = true;
let x: any = 'Hello';

let ids= [];

let strs: string[] = ['Jabu', 'Jacob', 'Lethabo'];
let vals: number[] = [2, 8, 9];
//Tuple takes values of different data types
let person : [number, string , boolean] = [1, 'Boka',true] 
//Tuple Array
let employee: [number, string][]

employee = [
    [1,'kat'],
    [2,'boka']
]

//Union - holds more than one type
let num : number | string ='22';

//enum
enum Direction1{
    Up,
    Down,
    Left,
    Right
}

console.log(Direction1.Up)

//Objects

type User1 = {
    iD : number
    name: string
    surname: string
}

const user: User1 ={
    iD:1,
    name:'Boka',
    surname:'Tlou'
}

console.log('your name :', user.name)

function Value<T>(arg0: number): string {
    return String(arg0);
}

//Type Assertion - Casting some sort
let cid: any = '1'
const customerId = cid as number
// const customerId = <number>cid

// Functions
function addNum(x: number, y: number): number {
    return x+y
}

console.log(addNum(15,20))

//void
function log(message: string | number): void{
    console.log(message)
}

log('Kitty')

//Interfaces - cant use it with unions or premtives

interface User {
    iD : number
    name: string
    surname: string
    age? : 23  //? means optional
}

const user1 : User={
    iD:1,
    name:'Boka',
    surname:'Tlou'
}

interface  MathFunc {
   (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y

//Classes
class Person {
    id: number
    name : string 

    constructor(id: number,name : string )
    {
      this.id = id
      this.name = name
    }

    register(){
        return `${this.name} hfddfgghhhgg ${this.id}`
    }
}

const brad = new Person(1,'kat')
console.log(brad)
console.log(brad.register())





