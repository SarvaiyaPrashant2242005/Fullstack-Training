let btn  = document.getElementById('search');
let city = document.getElementById('city');
let temp_c = document.getElementById('temp_c');
let temp_f = document.getElementById('temp_f');
let condition = document.getElementById('condition');

btn.addEventListener('click', async () => {
    console.log(city.value);
    const api = `https://api.weatherapi.com/v1/current.json?key=e884e49500a94e69811163154241309&q=${city.value}`;

    try {
        const rawdata = await fetch(api); 
        const res = await rawdata.json();

        console.log(res.current.temp_c);
        let tempc = res.current.temp_c;
        let tempf = res.current.temp_f;
        let con = res.current.condition.text;

        temp_c.textContent = tempc;
        temp_f.textContent = tempf;
        condition.textContent = con;
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
});
