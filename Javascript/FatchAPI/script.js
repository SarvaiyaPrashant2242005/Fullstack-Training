    let API = "https://jsonplaceholder.typicode.com/users";

    const btn = document.getElementById('apifatch');
    const users = document.getElementById('users');

    btn.addEventListener('click' , () => {
        console.log("Button clicked");
                    fetch(API)
    .then((rawData) => {
        return rawData.json();
    })
    .then((res) => {   
       
        res.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            users.appendChild(li)

        });
    }).catch((rej) => {
        console.log(rej);
    })
    })
