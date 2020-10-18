//Arches Weather
const ArchesapiURL = "https://api.openweathermap.org/data/2.5/weather?lat=38.73&lon=109.59&units=imperial&APPID=8edd374362f96360d97da10d2909e8b7";
//38.7331, 109.5925

fetch(ArchesapiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    document.getElementById('Acurrent-temp')
    .textContent = jsObject.weather[0].description;
    document.getElementById('Atemp')
    .textContent = jsObject.main.temp_max;
    document.getElementById('Ahumidity')
    .textContent = jsObject.main.humidity;
    document.getElementById('Aspeed')
    .textContent = jsObject.wind.speed;

    runWindChillA();
  });
  function runWindChillA(){
    let temp = parseFloat(document.getElementById('Atemp').textContent);
    let speed = parseFloat(document.getElementById('Aspeed').textContent);
  if (temp <= 50 && speed >= 3) {
    let calc = 35.74 + temp * 0.6215 - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    document.getElementById('Acalc').innerHTML = Math.round(calc);
}
  else {
    document.getElementById('Acalc').innerHTML = 'N/A';
}
}

//Bryce Weather
const BryceapiURL = "https://api.openweathermap.org/data/2.5/weather?lat=37.63&lon=111.98&units=imperial&APPID=8edd374362f96360d97da10d2909e8b7";
//37.6348165,-111.980871

fetch(BryceapiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    document.getElementById('Bcurrent-temp')
    .textContent = jsObject.weather[0].description;
    document.getElementById('Btemp')
    .textContent = jsObject.main.temp_max;
    document.getElementById('Bhumidity')
    .textContent = jsObject.main.humidity;
    document.getElementById('Bspeed')
    .textContent = jsObject.wind.speed;

    runWindChillB();
  });
  function runWindChillB(){
    var temp = parseFloat(document.getElementById('Btemp').textContent);
    var speed = parseFloat(document.getElementById('Bspeed').textContent);
  if (temp <= 50 && speed >= 3) {
    var calc = 35.74 + temp * 0.6215 - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    document.getElementById('Bcalc').innerHTML = Math.round(calc);
}
  else {
    document.getElementById('Bcalc').innerHTML = 'N/A';
}
}
//Canyonlands Weather
const CanyonapiURL = "https://api.openweathermap.org/data/2.5/weather?lat=38.33&lon=109.88&units=imperial&APPID=8edd374362f96360d97da10d2909e8b7";
//38.3269, 109.8783

fetch(CanyonapiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    document.getElementById('Cancurrent-temp')
    .textContent = jsObject.weather[0].description;
    document.getElementById('Cantemp')
    .textContent = jsObject.main.temp_max;
    document.getElementById('Canhumidity')
    .textContent = jsObject.main.humidity;
    document.getElementById('Canspeed')
    .textContent = jsObject.wind.speed;

    runWindChillCan();
  });
  function runWindChillCan(){
    var temp = parseFloat(document.getElementById('Cantemp').textContent);
    var speed = parseFloat(document.getElementById('Canspeed').textContent);
  if (temp <= 50 && speed >= 3) {
    var calc = 35.74 + temp * 0.6215 - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    document.getElementById('Cancalc').innerHTML = Math.round(calc);
}
  else {
    document.getElementById('Cancalc').innerHTML = 'N/A';
}
}
//Capitol Reef Weather
const CapitolapiURL = "https://api.openweathermap.org/data/2.5/weather?lat=38.37&lon=111.26&units=imperial&APPID=8edd374362f96360d97da10d2909e8b7";
//38.3670, 111.2615

fetch(CapitolapiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    document.getElementById('Capcurrent-temp')
    .textContent = jsObject.weather[0].description;
    document.getElementById('Captemp')
    .textContent = jsObject.main.temp_max;
    document.getElementById('Caphumidity')
    .textContent = jsObject.main.humidity;
    document.getElementById('Capspeed')
    .textContent = jsObject.wind.speed;

    runWindChillCap();
  });
  function runWindChillCap(){
    var temp = parseFloat(document.getElementById('Captemp').textContent);
    var speed = parseFloat(document.getElementById('Capspeed').textContent);
  if (temp <= 50 && speed >= 3) {
    var calc = 35.74 + temp * 0.6215 - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    document.getElementById('Capcalc').innerHTML = Math.round(calc);
}
  else {
    document.getElementById('Capcalc').innerHTML = 'N/A';
}
}
//Zions Weather
const ZapiURL = "https://api.openweathermap.org/data/2.5/weather?lat=37.30&lon=113.03&units=imperial&APPID=8edd374362f96360d97da10d2909e8b7";
//37.2982, 113.0263

fetch(ZapiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    document.getElementById('Zcurrent-temp')
    .textContent = jsObject.weather[0].description;
    document.getElementById('Ztemp')
    .textContent = jsObject.main.temp_max;
    document.getElementById('Zhumidity')
    .textContent = jsObject.main.humidity;
    document.getElementById('Zspeed')
    .textContent = jsObject.wind.speed;

    runWindChillZ();
  });
  function runWindChillZ(){
    var temp = parseFloat(document.getElementById('Ztemp').textContent);
    var speed = parseFloat(document.getElementById('Zspeed').textContent);
  if (temp <= 50 && speed >= 3) {
    var calc = 35.74 + temp * 0.6215 - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    document.getElementById('Zcalc').innerHTML = Math.round(calc);
}
  else {
    document.getElementById('Zcalc').innerHTML = 'N/A';
}
}

//Salt Lake City
const SapiURL = "https://api.openweathermap.org/data/2.5/weather?lat=40.76&lon=111.89&units=imperial&APPID=8edd374362f96360d97da10d2909e8b7";
//40.7608, 111.8910

fetch(SapiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    document.getElementById('Scurrent-temp')
    .textContent = jsObject.weather[0].description;
    document.getElementById('Stemp')
    .textContent = jsObject.main.temp_max;
    document.getElementById('Shumidity')
    .textContent = jsObject.main.humidity;
    document.getElementById('Sspeed')
    .textContent = jsObject.wind.speed;

    runWindChillS();
  });
  function runWindChillS(){
    var temp = parseFloat(document.getElementById('Stemp').textContent);
    var speed = parseFloat(document.getElementById('Sspeed').textContent);
  if (temp <= 50 && speed >= 3) {
    var calc = 35.74 + temp * 0.6215 - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    document.getElementById('Scalc').innerHTML = Math.round(calc);
}
  else {
    document.getElementById('Scalc').innerHTML = 'N/A';
}
}
//Provo
const PapiURL = "https://api.openweathermap.org/data/2.5/weather?lat=40.23&lon=111.66&units=imperial&APPID=8edd374362f96360d97da10d2909e8b7";
//40.2338, 111.6585

fetch(PapiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    document.getElementById('Pcurrent-temp')
    .textContent = jsObject.weather[0].description;
    document.getElementById('Ptemp')
    .textContent = jsObject.main.temp_max;
    document.getElementById('Phumidity')
    .textContent = jsObject.main.humidity;
    document.getElementById('Pspeed')
    .textContent = jsObject.wind.speed;

    runWindChillP();
  });
  function runWindChillP(){
    var temp = parseFloat(document.getElementById('Ptemp').textContent);
    var speed = parseFloat(document.getElementById('Pspeed').textContent);
  if (temp <= 50 && speed >= 3) {
    var calc = 35.74 + temp * 0.6215 - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    document.getElementById('Pcalc').innerHTML = Math.round(calc);
}
  else {
    document.getElementById('Pcalc').innerHTML = 'N/A';
}
}
//Farmington
const FapiURL = "https://api.openweathermap.org/data/2.5/weather?lat=40.98&lon=111.89&units=imperial&APPID=8edd374362f96360d97da10d2909e8b7";
//40.9805, 111.8874

fetch(FapiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    document.getElementById('Fcurrent-temp')
    .textContent = jsObject.weather[0].description;
    document.getElementById('Ftemp')
    .textContent = jsObject.main.temp_max;
    document.getElementById('Fhumidity')
    .textContent = jsObject.main.humidity;
    document.getElementById('Fspeed')
    .textContent = jsObject.wind.speed;

    runWindChillF();
  });
  function runWindChillF(){
    var temp = parseFloat(document.getElementById('Ftemp').textContent);
    var speed = parseFloat(document.getElementById('Fspeed').textContent);
  if (temp <= 50 && speed >= 3) {
    var calc = 35.74 + temp * 0.6215 - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    document.getElementById('Fcalc').innerHTML = Math.round(calc);
}
  else {
    document.getElementById('Fcalc').innerHTML = 'N/A';
}
}