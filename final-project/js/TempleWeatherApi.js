//Bountiful
const BapiURL = "https://api.openweathermap.org/data/2.5/weather?id=5771826&units=imperial&APPID=8edd374362f96360d97da10d2909e8b7";


fetch(BapiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    document.getElementById('bcurrent-temp')
    .textContent = jsObject.weather[0].description;
    document.getElementById('btemp')
    .textContent = jsObject.main.temp_max;
    document.getElementById('bhumidity')
    .textContent = jsObject.main.humidity;
    document.getElementById('bspeed')
    .textContent = jsObject.wind.speed;

    runWindChillB();
  });
  function runWindChillB(){
    var temp = parseFloat(document.getElementById('btemp').textContent);
    var speed = parseFloat(document.getElementById('bspeed').textContent);
  if (temp <= 50 && speed >= 3) {
    var calc = 35.74 + temp * 0.6215 - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    document.getElementById('bcalc').innerHTML = Math.round(calc);
}
  else {
    document.getElementById('bcalc').innerHTML = 'N/A';
}
}
//Manti
const MapiURL = "https://api.openweathermap.org/data/2.5/weather?id=5542758&units=imperial&APPID=8edd374362f96360d97da10d2909e8b7";


fetch(MapiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    document.getElementById('mcurrent-temp')
    .textContent = jsObject.weather[0].description;
    document.getElementById('mtemp')
    .textContent = jsObject.main.temp_max;
    document.getElementById('mhumidity')
    .textContent = jsObject.main.humidity;
    document.getElementById('mspeed')
    .textContent = jsObject.wind.speed;

    runWindChillM();
  });
  function runWindChillM(){
    var temp = parseFloat(document.getElementById('mtemp').textContent);
    var speed = parseFloat(document.getElementById('mspeed').textContent);
  if (temp <= 50 && speed >= 3) {
    var calc = 35.74 + temp * 0.6215 - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    document.getElementById('mcalc').innerHTML = Math.round(calc);
}
  else {
    document.getElementById('mcalc').innerHTML = 'N/A';
}
}
//Nauvoo
const NapiURL = "https://api.openweathermap.org/data/2.5/weather?id=4903330&units=imperial&APPID=8edd374362f96360d97da10d2909e8b7";


fetch(NapiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    document.getElementById('ncurrent-temp')
    .textContent = jsObject.weather[0].description;
    document.getElementById('ntemp')
    .textContent = jsObject.main.temp_max;
    document.getElementById('nhumidity')
    .textContent = jsObject.main.humidity;
    document.getElementById('nspeed')
    .textContent = jsObject.wind.speed;

    runWindChillN();
  });
  function runWindChillN(){
    var temp = parseFloat(document.getElementById('ntemp').textContent);
    var speed = parseFloat(document.getElementById('nspeed').textContent);
  if (temp <= 50 && speed >= 3) {
    var calc = 35.74 + temp * 0.6215 - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    document.getElementById('ncalc').innerHTML = Math.round(calc);
}
  else {
    document.getElementById('ncalc').innerHTML = 'N/A';
}
}
//Winter Quarters
const WapiURL = "https://api.openweathermap.org/data/2.5/weather?lat=41.3341&lon=95.9662&units=imperial&APPID=8edd374362f96360d97da10d2909e8b7";


fetch(WapiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    document.getElementById('wcurrent-temp')
    .textContent = jsObject.weather[0].description;
    document.getElementById('wtemp')
    .textContent = jsObject.main.temp_max;
    document.getElementById('whumidity')
    .textContent = jsObject.main.humidity;
    document.getElementById('wspeed')
    .textContent = jsObject.wind.speed;

    runWindChillW();
  });
  function runWindChillW(){
    var temp = parseFloat(document.getElementById('wtemp').textContent);
    var speed = parseFloat(document.getElementById('wspeed').textContent);
  if (temp <= 50 && speed >= 3) {
    var calc = 35.74 + temp * 0.6215 - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    document.getElementById('wcalc').innerHTML = Math.round(calc);
}
  else {
    document.getElementById('wcalc').innerHTML = 'N/A';
}
}