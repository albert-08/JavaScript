console.log('Hello, TypeScript')

function sum(a: number, b: number){
    return a + b
}

const suma = sum(2,3)
console.log(suma)

//Boolean
let muted: boolean = true
muted = false

//Números
let age = 6
let numerador: number = 42
let denominador: number = age
let resultado = numerador / denominador
console.log(resultado)

//String
let nombre: string = 'Frida'
let saludo = `Me llamo ${nombre}`
console.log(saludo)

//Arrays
let people: string[] = []
people = ["Frida", "Daniela", "Mariza"]
//people.push("9000")
console.log(people)

let peopleAndNumbers: Array< string | number> = []
peopleAndNumbers.push('Frida')
console.log(peopleAndNumbers)
peopleAndNumbers.push(1996)
console.log(peopleAndNumbers)

//Enum
enum Color{
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul",
    Amarillo = "Amarillo"
}

let colorFavorito: Color = Color.Azul
console.log(`Mi color favorito es ${colorFavorito}`)

//Any
let comodin: any = 'Joker'
console.log(comodin)
comodin = {type:'Wilcard'}
console.log(comodin)

//Object
let someObject: object = {type:"Wildcard"}
console.log(someObject)

//funciones
function add(a: number, b: number): number {
    return a + b
}

const res = add(4,6)
console.log(res)

function createAdder (a: number): (number) => number {
    return function(b: number){
        return a + b
    }
}

const addFour = createAdder(4)
const fourPlus6 = addFour(6)

function fullName(firstName: string, lastName?: string): string {
    return `${firstName} ${lastName}`
}

const frida = fullName('Frida', 'Benitez')
console.log(frida)

//Interfaces
interface Rectangulo {
    ancho: number
    alto: number
    color?: Color
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 8,
    //color: Color.Verde
}

function area(r: Rectangulo): number {
    return r.alto * r.ancho
}

const areaRect = area(rect)
console.log(areaRect)

rect.toString = function() {
    return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`
}

console.log(rect.toString())

