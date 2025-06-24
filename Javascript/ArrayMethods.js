let arr = [1,2,3,4,5,6,7,8,9,0]

// if a function is used as parameter in another functtion then it is known as callback function
// let mappedArray = arr.map( (i) => {
//     return i * i;
// })

// console.log(mappedArray); //returns an new array after iterating through each elements


// Map takes a callback function as a parameter and iterate through each element and we can do operations and return a new arrray.

// let mapedArray = arr.map( (i) => {
//     return i * i;
// }).map( (i) => {
//     return i +1;
// })

// console.log(mapedArray);


// Filterrr
// let mapppedArray = arr.map( (i) => {
//     return i * i;
// }).filter((i) => {
//     return (i % 2 == 0)
// })

// arr1 = [1,2,3,4,5]
// let reducedValue = arr1.reduce(function(acc , curr){
//     return acc + curr
// }, 0)
// console.log(reducedValue);


// Accumulator : previous iteration value
// Current : Current Value from an array

// Take n number as a input from user
// Multiple 3 in every element of an array 
// if the number is odd, pop an element
// Find the average of new array


let num = 5;
let array1 = [];

for(let i = 1;i<= num; i++){
    array1.push(i);
}

console.log(array1);

let even = array1.map( (i) => {
    return i * 3;
}).filter((i) => {
    return i%2==0;
})
console.log(even);


   
let answer = even.reduce(function(acc, curr){
    sum =acc + curr;
    return sum;
},0)

console.log(answer/even.length);

// ForEach doen't return anything or chaining not possible
// Iterated thriugh array but not creating new araay





