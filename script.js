// maths operators
let shwetaAge = 2022-2004
let testAge = 2022-2015
console.log(shwetaAge, 3**2)

let firstName = "Shweta"
let lastName = "Mishra"
console.log(firstName+ " " +lastName)


// Assignment Operators
let x =  10 + 5 
x+= 10   // x = x+10
x *= 4   // x =x*4
x++      // x = x+1
x--
x--
console.log(x)

//Comparison Operator
console.log(shwetaAge>testAge)

let z, y 
z=y=25-10-5
console.log(z,y)

const average = (shwetaAge + testAge) /2
console.log(shwetaAge, testAge , average)






/*
let js = 'amazing';
console.log(  40 + 8 + 23 - 10)

console.log("Shweta")
console.log(23)

let firstName = "Shweta"
console.log(firstName)

let countryName = "India"
let continentName = "Asia"
let countryPopulation = "1.3 Billion"

console.log(countryName)
console.log(continentName)
console.log(countryPopulation)

constisIsLand = true
const language = "English"

console.log(typeof isIsLand)
console.log(typeof language)
console.log(typeof continentName)
*/



const newName = 'Shweta'
const job = 'software engineer'
const birthYear = 2004
const year = 2022

const shweta = "i'm " + firstName + ' a ' +  (year-birthYear) + ' years old ' + job + '!'
console.log(shweta)

//template literal
const shwetaNew = `i am ${firstName} a ${job}`
console.log(shwetaNew)

const age = 19
const isOldEnough = age >= 18
 
if ( isOldEnough){
      console.log(`shweta can drive `) 
}


//test assignments

const massMark = 95
const massJohn = 85

const markHeight = 1.88
const johnHeight = 1.76

const BmiMark  =  massMark/(markHeight**2)
const BmiJohn = massJohn/(johnHeight**2 )

const markHigherBmi = BmiMark > BmiJohn
//BMI test with if else
console.log(BmiMark,BmiJohn,markHigherBmi)
 if (BmiMark > BmiJohn){
     console.log("Mark has greater BMI than John")

 }  else console.log("John has more BMI")




