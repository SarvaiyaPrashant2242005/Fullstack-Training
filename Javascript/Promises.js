const myPromise = new Promise((res, rej) => {
    let num = Math.ceil(Math.random() * 10)

    if(num %2 == 0 ){
        res({name: "Prashant" , age : 10});                             
        console.log(`num is ${num}`);
    }
    else{
        rej({success : "False"});
        console.log(`Error :  ${num}`);
    }
})

myPromise
.then((data) => {
    console.log(data);
})
.catch((data) => {
    console.log(data);
})


// Rather then making promises we are consuming promises


