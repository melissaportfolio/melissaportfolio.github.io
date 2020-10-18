//5607916 soda springs,5585010 fish haven
const apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=42.0372&lon=111.3960&units=imperial&APPID=8edd374362f96360d97da10d2909e8b7";


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    document.getElementById('current-temp')
    .textContent = jsObject.weather[0].description;
    document.getElementById('temp')
    .textContent = jsObject.main.temp_max;
    document.getElementById('humidity')
    .textContent = jsObject.main.humidity;
    document.getElementById('speed')
    .textContent = jsObject.wind.speed;

    runWindChill();
  });
  function runWindChill(){
    var temp = parseFloat(document.getElementById('temp').textContent);
    var speed = parseFloat(document.getElementById('speed').textContent);
  if (temp <= 50 && speed >= 3) {
    var calc = 35.74 + temp * 0.6215 - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    document.getElementById('calc').innerHTML = Math.round(calc);
}
  else {
    document.getElementById('calc').innerHTML = 'N/A';
}
}