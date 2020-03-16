// ASSESSMENT 6: Coding Practical Questions


// --------------------1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.

var people = [{name: "ford prefect", occupation: "hitchhiker"}, {name: "zaphod beeblebrox", occupation: "president of the galaxy"}, {name: "arthur dent", occupation: "radio employee"}]
// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is the president of the galaxy." "Arthus Dent is a radio employee."

// create a function called prettyDescription
prettyDescription = (arr) =>{
    let capIt = arr.replace 
    
    let emptyArr = arr.map((value, index) => {
        // return the name and captilize the first letters
        // used regular expression to replace the first letter in key called name to go through each word  and replaced it with capIt which is a function to make it capitalized.
        let cappedIt = value.name.replace(/\b\w/g, capIt => capIt.toUpperCase()) 
        
        // takes in an array of objects and combines the name and occupation 
        if (index % 2 !== 0){
            return `${cappedIt} is the ${value.occupation}`
        } else{
            return `${cappedIt} is a ${value.occupation}`
        }
    }) 
    return emptyArr.toString()
}
console.log(prettyDescription(people));


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the remainder of the numbers when divided by 3.

var testingArray1 = [23, "Heyyyy!", 45, -9, 0, "Yo", false]
// Expected output: [ 2, 0, -0, 0 ]
var testingArray2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// create a function that is called numOnly and takes in an array that will return things % 3
numOnly = (arr) => {
let orgArr = arr.filter(el => typeof el === "number")
// new array to push into with the for loop.
let newArr = []
 for(let i=0; i < orgArr.length; i++){
     newArr.push(orgArr[i] % 3)
 }
 return newArr
}
console.log(numOnly(testingArray1));
console.log(numOnly(testingArray2));


// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
var testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]
// create a function called arrMeld which takes in 2 arrays and returns one array 
arrMeld = (ray1, ray2) => {
    //create a new array using spread operator to make them both in one
    let arrSum = [...ray1, ...ray2]
    //filter method to go through the new array and compare each value
    return arrSum.filter((a,b) => arrSum.indexOf(a) === b)
    }
    console.log(arrMeld(testingArray3, testingArray4));
