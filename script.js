const apiKey = "12345"/*You can use your own API KEY for this you can get from (https://openweathermap.org/api) and you can use this vedio (https://youtu.be/tPlD-CmH7H4?si=t2EPwjmvnU3HJQmV) */;

async function getWeather() {
    const city = document.getElementById("cityinput").value;

    if(!city){
        alert("please enter city name!");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{
        const response = await fetch(url);
        const data = await response.json();

        if(data.cod === "404"){
            alert("city is not found! please enter correctly!");
            return;
        }

        document.getElementById("cityname").textContent = data.name;
        document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;
        document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
        document.getElementById("wind-speed").textContent = `Wind Speed: ${data.main.speed} km/h`;

        const iconCode = data.weather[0].icon;
        document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${iconCode}.png`;
    } catch(error) {
        console.error("Error fetching data : ",error);
        alert("Faild to fetched data. please try again.");
    }
}