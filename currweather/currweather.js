// gets current weather of passed in city coordinates
function getWeather() {
    const lat = document.getElementById("latitude").value
    if (lat < -90 || lat > 90) {
        window.alert("Latitude must be in range of -90 to 90")
        return
    }
    const long = document.getElementById("longitude").value
    if (long < -180 || long > 180) {
        window.alert("Longitude must be in range of -180 to 180")
        return
    }
    const weatherObj = fetch(`https://api.open-meteo.com/v1/forecast?latitude=${parseFloat(lat)}&longitude=${parseFloat(long)}&current_weather=true`);
    weatherObj.then((response) => {
        const weatherJson = response.json();
        console.log(weatherJson)
        weatherJson.then((weatherData) => {
            document.getElementById("temperature").value = weatherData.current_weather['temperature'];
            if (weatherData.current_weather['is_day'] === 1) {
                document.getElementById("dayornight").value = "Day";
                document.body.style.backgroundColor = 'lightblue';

            }
            else {
                document.getElementById("dayornight").value = "Night";
                document.body.style.backgroundColor = 'black';
                document.getElementById("don").style.color = 'white';

            }
        });
    });

} 