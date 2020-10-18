const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL) 
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject); //temporary testing
        const towns = jsonObject['towns'];
        const idahoTowns = ["Fish Haven", "Soda Springs", "Preston"];
        for (let i = 0; i < towns.length; i++) { 
            if (idahoTowns.includes(towns[i].name)) {
            //create variable elements
            let card = document.createElement('section');
            let span = document.createElement('span');
            let h4 = document.createElement('h4');
            let motto = document.createElement('p');
            let yearFounded = document.createElement('p');
            let currentPopulation = document.createElement('p');
            let averageRainfall = document.createElement('p');
            let image = document.createElement('img');
            //modify the contents
            card.className = 'towncard';
            motto.className = 'motto';
            h4.textContent = towns[i].name;
            motto.textContent = towns[i].motto;
            yearFounded.textContent =  'Year Founded: ' + towns[i].yearFounded;
            currentPopulation.textContent =  'Population: ' + towns[i].currentPopulation;
            averageRainfall.textContent =  'Annual Rain Fall: ' + towns[i].averageRainfall;
            image.setAttribute('src', 'images/' + towns[i].photo);
            image.setAttribute('alt', towns[i].name);
            //Merge them together
            
            span.appendChild(h4);
            span.appendChild(motto);
            span.appendChild(yearFounded);
            span.appendChild(currentPopulation);
            span.appendChild(averageRainfall);
            card.appendChild(span);
            card.appendChild(image);
            //Attaching to the page
            document.querySelector('div.towncards').appendChild(card);
        }
        }
    });