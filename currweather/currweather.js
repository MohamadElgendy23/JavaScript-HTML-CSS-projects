function getWeather()
{
    city = document.getElementById("city").value
    console.log(fetch("https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={c1b8a9a5529c12d8bafe0f77f130217e}").then(response => console.log(response.text())))
}