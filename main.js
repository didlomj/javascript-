//javascript method

//alert("Hello")

// decalering variable in js : var, let const

//let a = 6

//a = 7
//let b 
//b = 22
//console.log(a)
//console.log(b)

//data types in js
/*
string, number,
boolen, null, underfine
object
*/


const string = "SIWES"
const number = 33
const number1 = 34.55
//const und = underfine
const bull = true

const null1 = null

//getting the type of variable

console.log(typeof string)

//this is a methods.()
//this is a property

const person = {
    Name:"Muhsin Marwan",
    Class:"Primary 5",
    School:"AAd Primay",
}

//console.log(person.Name)

const SIWES = ['a','b',2,true]

//console.log(SIWES[3])

const firstname = "Muhsin"
const lastname = "marwan"

SIWES.push(90)
console.log(SIWES)

//console.log("My name is "+firstname+" "+lastname)
//console.log('My name is ${firstname} ${lastname}')

const student = {
    Name:"Muhsin Marwan",
    Class:"Primary 5",
    School:"AAd Primay",
    phone:{
        id1:12345,
        id2:67890,
    },
Friends : ['Musa', 'ahmad', 'fatimah'],
}
console.log(student.phone.id1)
console.log(student.Friends[1])




function add (){
let a= 5
let b= 7
let c= b+a
console.log(c)
}
add()