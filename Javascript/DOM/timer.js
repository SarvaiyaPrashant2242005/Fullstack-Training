const start = document.getElementById("Start");
const timer = document.getElementById("timer");
const stop = document.getElementById("Stop");
const reset = document.getElementById("Reset");
let count = 0;
let timerstart;


start.addEventListener("click", () => {
    if (!timerstart) { // only set if not already started
        timerstart = setInterval(() => {
            timer.style.fontSize = "100px"
            timer.innerText = count;
            count++;
        }, 1000);
    }
});



stop.addEventListener("click" , () => {
    clearInterval(timerstart);
    timerstart = null;
})


reset.addEventListener("click" , () => {
    count =  0;
    timer.innerText = 0;
        timerstart = null;

    clearInterval(timerstart);
})
