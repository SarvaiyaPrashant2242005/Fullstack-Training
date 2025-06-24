// Take 3 number as a input of triangle input
// Check and print
//  - All sides are equal : Equilateral
//  - if 2 sides are equal : Isosceles
//  - if all different : Scalene

// Also if valid triangle
// two sides > 3 sides

let a = Number(prompt("Enter 1st side of the triangle"));
let b = Number(prompt("Enter 2nd side of the triangle"));
let c = Number(prompt("Enter 3rd side of the triangle"));




if(a+b>c && b+c>a && a+c>b){
    alert("Valid");
    if(a == b && b == c){
        alert("Equilateral");
    }
    else if(a ==  b|| b==c || a==c){
        alert("Isosceles");
    }    
    else { 
        alert("Scalene")
    }
}
else{
    alert("Invalid Triangle")
}


