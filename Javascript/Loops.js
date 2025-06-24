// // For loops

// let arr = [1,2,3,4,5];


// // for(let i=0;i<arr.length;i++){
// //     console.log(arr[i]);
// // }

// // let i = 5;
// // while(i < arr.length){
// //     console.log(arr[i]);
// //     i++;
// // }


// do{
//     console.log("Ha bhai");
//     console.log(arr[i]);
//     i++;
// }while(i<arr.length)




// // Write a function named evenNumber 
// // PRint all the even values from 0 to n 


// function printEventoN(n){
//     for(let i=1;i<=n;i++){
//         if(i%2==0){
//             console.log(i);
//         }
//     }
// }

// let str = "Prashant";
// let reversed = "";
// let i = str.length - 1;


// let str = "prashant";
// let i = str.length - 1;
// let rev = ""
// while (i >= 0) {
//     rev += str[i]
//     i--; 
// }

// console.log(rev);



// function isPrime(n){
//     if(n <= 1){
//         return false;
//     }

//     for(let i =2;i<n;i++ ){
//         if(num % i == 0){
//             return false;
//         }
//     }
//     return true;
// }

// let num = 90;
// isPrime(90);
// console.log(isPrime(31));


// let newArr = [1, true, null, undefined, "Prashant", 1,2];

// // For of

// for(values of newArr){
//     console.log(values);
// }

// for(values in newArr){
//     console.log(values);
// }


let obj1 = {
    name : "Prashant",
    year : 1023
}
for(keys in obj1){
    console.log(obj1[keys]);
}


