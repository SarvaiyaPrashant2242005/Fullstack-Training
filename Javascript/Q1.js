// Question
//  Take amount input
// Amount must be multiple of 100
// Minimum balance must be Rs.1000
// valid show new balance
// Else appropriate messege


let a = Number(prompt("Enter amount to withdraw:"));
let balance = 1500;
// prompt("Enter A : ", a);

if (a % 100 === 0) {
    if (balance - a >= 1000) {
        balance -= a;
        alert("New Balance:" +  balance);
    } else {
        alert("Low Balance. Minimum Rs.1000 must remain in account.");
    }
} else {
    alert("Please enter amount in multiples of 100.");
}