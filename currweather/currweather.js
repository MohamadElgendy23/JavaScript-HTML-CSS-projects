// gets current weather of passed in city coordinates
function getWeather() {
    const lat = document.getElementById("latitude").value
    const long = document.getElementById("longitude").value
    const weatherObj = fetch(`https://api.open-meteo.com/v1/forecast?latitude=${parseFloat(lat)}&longitude=${parseFloat(long)}&current_weather=true`);
    weatherObj.then((response) => {
        const weatherJson = response.json();
        weatherJson.then((data) => {
            document.getElementById("currWeather").value = data.current_weather['temperature']
        });
    });

} 