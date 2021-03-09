const weatherData = {
    tempUnit: "C",
    windSpeedUnit: "m/s",
    days: [
    { day: "Mon", temp: 22, windDirection: "north-east", windSpeed: 10 , type:"sunny" },
    { day: "Tue", temp: 14, windDirection: "north-west", windSpeed: 14, type: "rainy" },
    { day: "Wed", temp: 17, windDirection: "south-east", windSpeed: 20, type: "cloudy" }]

};







function mon() 
{ document.getElementById("pa").innerHTML=weatherData.days[0].day +("<br>")+("<br>") + weatherData.days[0].temp+"°C" +("<br>")+("<br>") + weatherData.days[0].windDirection+" " + "↗"+("<br>")+("<br>")+ weatherData.days[0].windSpeed+"km/h"+
 ("<br>")+("<br>")+ weatherData.days[0].type } 
function tue() 
{ document.getElementById("pa").innerHTML=weatherData.days[1].day +("<br>")+("<br>") + weatherData.days[1].temp+"°C" +("<br>")+("<br>") + weatherData.days[1].windDirection+" " + "↖"+("<br>")+("<br>")+ weatherData.days[1].windSpeed+"km/h"
+ ("<br>")+("<br>")+ weatherData.days[1].type} 
function wed() 
{ document.getElementById("pa").innerHTML=weatherData.days[2].day +("<br>")+("<br>") + weatherData.days[2].temp+"°C" +("<br>")+("<br>") + weatherData.days[2].windDirection+" " + "↘"+("<br>")+("<br>")+ weatherData.days[2].windSpeed+"km/h"
+ ("<br>")+("<br>")+ weatherData.days[2].type} 