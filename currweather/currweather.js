// gets current weather of passed in city coordinates
function getWeather() {
    const lat = document.getElementById("latitude").value
    const long = document.getElementById("longitude").value
    const weatherObj = fetch(`https://api.open-meteo.com/v1/forecast?latitude=${parseFloat(lat)}&longitude=${parseFloat(long)}&current_weather=true`);
    weatherObj.then((response) => {
        const weatherJson = response.json();
        console.log(weatherJson)
        weatherJson.then((weatherData) => {
            document.getElementById("currWeather").value = weatherData.current_weather['temperature']
        });
    });

} 