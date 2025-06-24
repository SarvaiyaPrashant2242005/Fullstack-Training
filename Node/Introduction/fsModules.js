const fs = require("fs");

///////////////////////////////////////////////////////write command///////////////////////////////////////////////////////////

// To insert the dtaa into the file and create a file using synchronus command
// fs.writeFileSync("log.txt", "I am coming from write File command");

// // Using asynchromnus command
// fs.writeFile("log.txt","Prashant Sarvaiya", (err, data) => {
//     if(err){
//         console.log("Error");
//     }
//     else{
//         console.log("Data written successfully");
//     }
// })





///////////////////////////////////////////////////////////////// Read command ///////////////////////////////////////////

// sync 
// const data = fs.readFileSync("log.txt", "utf-8");
// console.log(data);

// async

// const data = fs.readFile("log.txt", "utf-8" , (err, data) => {
//     if(err) console.log(err);
//     else {
//         console.log(data);
//     }
// })


////////////////////////////////////////// update ///////////////////////////////////////////////

// Sync

// fs.appendFileSync("log.txt", "Neel Raiyani\n");


// Async

// const data = fs.appendFile("log.txt", "Niv Sapra\n" , (err, data) => {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("DAta appended");
//     }
// })

//////////////////////////////////////////////////////////Copying
// Sync

// fs.cpSync("log.txt" , "students.txt")

// // Async
// // 
// fs.cp("log.txt", "Students.txt" , (err, data) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Kam ho gya");
//     }
// })


///////////////////////////////////////////////////////////////////Delete a file
// // Sync
// fs.unlinkSync("Students.txt");

// Async

// fs.unlink("Students.txt" , (err, data) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log("KAm tamam");
//     }
// })