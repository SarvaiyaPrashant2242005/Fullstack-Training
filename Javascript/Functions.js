function sayHello() {
    console.log("Grading System");
}
sayHello();


function grader(score) {
    if (typeof (score) == "number") {
        if (score >= 90 && score <= 100) {
            console.log("A");
        }
        else if (score >= 80 && score <= 90) {
            console.log("B");
        }
        else if (score >= 70 && score < 80) {
            console.log("C");
        }
        else if (score >= 60 && score < 70) {
            console.log("D");
        }
        else {
            console.log("E");
        }
    } else {
        console.log("Number dal Number");
    }
}

grader(92);
grader(80);
grader(76);
grader(66);
grader(55);
grader(1);
// grader(p);



// [1,2,3,4,5,6] ----------> [3,4,5,6,1,2]
// [[0,11], [0,23] , [1,11] , [1,12], [0,10],[0,23]]