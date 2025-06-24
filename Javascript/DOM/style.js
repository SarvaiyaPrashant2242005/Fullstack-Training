const btn = document.getElementById('btn');
const textDiv = document.getElementById('text');

let toggle = true;

btn.addEventListener('click', () => {
    if(toggle){
    textDiv.style.backgroundColor = "white"
        toggle = !toggle;
}
    else{
         textDiv.style.backgroundColor = "black";
                 toggle = !toggle;

    }
});

