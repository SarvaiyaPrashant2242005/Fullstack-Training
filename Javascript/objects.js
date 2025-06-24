const obj1= {
    "full name"  : "Prashant Sarvaiya",
    university : "MU",
    year : 2026
}

// // console.log(obj1.university);
// // console.log(obj1["university"]);

// console.log(obj1["full name"] = "Prashant");
// // console.log();
// Object.freeze(obj1)

// obj1.university = "DU"
// console.log(obj1);

const location = {
    city : "Gondal"
}

Object.assign(obj1, location);
// console.log(obj1);
// console.log(location);


// Spread Operator

// array = [1,2,3,4,5,6]
// console.log(...array);
// console.log({...obj1, ...location});


// console.log(Object.keys(obj1));

// console.log(Object.values(obj1));

// console.log(Object.entries(obj1));

console.log(obj1.hasOwnProperty("full name"));