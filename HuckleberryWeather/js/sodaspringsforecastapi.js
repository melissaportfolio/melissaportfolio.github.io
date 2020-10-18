const apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=8edd374362f96360d97da10d2909e8b7";

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);

    var counter = 1;
    for (let i = 0; i < jsObject.list.length; i++){
      if (jsObject.list[i].dt_txt.includes('18:00:00')) {
        /*console.log(jsObject.list[i].main.temp.toFixed(0));*/
    document.getElementById('temp_' + counter).textContent = jsObject.list[i].main.temp;
    
    const imagesrc = 'https://openweathermap.org/img/wn/' + jsObject.list[i].weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.list[i].weather[0].description;  // note how we reference the weather array
    document.getElementById('pimg_' + counter).setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('pimg_' + counter).setAttribute('alt', desc);

    var d = new Date(jsObject.list[i].dt_txt);
    document.getElementById('day_' + counter).textContent = days[d.getDay()];

    counter++;
      }
    }
  });