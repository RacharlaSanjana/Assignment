if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            fetchWeather(latitude, longitude);
        },
        (error) => {
            console.error("Error obtaining location:", error);
        }
    );
} else {
    console.error("Error in Fetching Location");
}

async function fetchWeather(lat, lon) {
    const apiKey = "";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            localStorage.setItem("weatherData", JSON.stringify(data));
        })
        .catch(error => console.log("Error Fetching weather data", error));
}
