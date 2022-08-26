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

//type conversion

const inputYear = '1991'
console.log(Number(inputYear) , inputYear)
console.log(Number(inputYear )+ 18)
console.log(String(23) , 23)

//type coercion
console.log('i am' + 23 +'years old')
console.log('23'-'10'-3)// strings are converted to numbers
console.log('23' + '10' + 3)//number converted to string by + operator
console.log('23'*'2') // strings into number by * operator


let n = '1'+1 //string rules out with + operator
  n = n-1
  console.log(n)

let m = '3'-1 //number rules out when - operator is there
m = m-1
 console.log(m)

 //truthy falsy
 //there are 5 falsy values in javascript : 0 , '', undefined, null,NaN

 console.log(Boolean(NaN)) //false
 console.log(Boolean(0))   //false
 console.log(Boolean(undefined)) //false
 console.log(Boolean({})) //true
 console.log(Boolean("")) //false
 console.log(Boolean(null)) //  yiled false

 const money = 0
 if (money){
     console.log("Dont spend it all")
 } else {
    console.log("sorry get a job")
 }

let height
if (height){
    console.log("valid height")
} else {
    console.log("invalid")
}

//equality operators

const age2 = 18
if (age2 ===18){
    console.log("eligible")
}

// === is strict equality operator, doesn't do type coersion
// == does type coersion 
// eg: '18' == 18 true; because of type coersion
// eg: '18' === 18 false; because it is strict equality operator

/*
const  favouriteNum = Number(prompt("What's your favourite number?"))
console.log(favouriteNum)
console.log(typeof favouriteNum)

if(favouriteNum ==23){ // '23' == 23
     console.log("cool!")
}else if (favouriteNum === 7){
    console.log("7 is also cool")
}else {
    console.log("neither 23 nor 7")
}


if(favouriteNum !== 23){
    console.log("it is not 23")
} 
*/


//practice session

const dolphinScore = (97 + 108 + 89)/3
const KoalaScore = (88+91+110)/3

console.log(dolphinScore , KoalaScore)

if (dolphinScore > KoalaScore){
    console.log("Dolphins win trophy")
}else if (KoalaScore>dolphinScore){
    console.log("Koala wins Trophy")
}else if (dolphinScore === KoalaScore){
    console.log("Game Draw")
}

//Switch Statement
 const day = 'friday'

 switch(day){
    case 'monday':
        console.log("plan couse structure")
        break
    case 'tuesday' :
        console.log("prepare theory")
        break
    case 'wednesday':
        console.log("prepare tests")
        break
    case 'thursday':
        console.log("prepare results")
        break
    case 'friday':
        console.log("make topper list")
        break
    case 'saturday':
       console.log("weekend")
       break
    default: console.log("not weekday")
 }

 //the conditional (ternary) operator
 const age3 = 12;
 age >= 18 ? console.log('i like to drink tea') 
           : console.log("i like to drink coffee")

const drink = age3 >= 18 ? 'wine' : 'water'
console.log(drink)

//final coding challenge

const billValue = 275 + 40 + 430
billValue>=50 && billValue<=300 ?
 console.log(`${billValue}, and the tip is ${(15/100)*billValue}`  ) :
 console.log(`${billValue} and the tip is ${Math.floor((30/100)*billValue)}`)