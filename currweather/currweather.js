function getWeather()
{
    lat = document.getElementById("latitude").value
    long = document.getElementById("longitude").value
    console.log(fetch('https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m').then(response => console.log(response.text())))
} 