const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL) 
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject); //temporary testing
        const towns = jsonObject['towns'];
        const idahoTowns = ["Preston"];
        for (let i = 0; i < towns.length; i++) { 
            if (idahoTowns.includes(towns[i].name)) {
            //create variable elements
            let card = document.createElement('section');
            let span = document.createElement('span');
            let h4 = document.createElement('h4');
            let hr = document.createElement('hr');
            let event = document.createElement('p');
            let event1 = document.createElement('p');
            let event2 = document.createElement('p');
            let image = document.createElement('img');
            //modify the contents
            card.className = 'eventcard';
            h4.textContent = 'Upcoming Events';
            event.textContent = towns[i].events[0];
            event1.textContent = towns[i].events[1];
            event2.textContent = towns[i].events[2];
            image.setAttribute('src', 'images/PrestonEventImg1.jpg');
            image.setAttribute('alt', 'old saloon');
            //Merge them together
            
            span.appendChild(h4);
            span.appendChild(hr);
            span.appendChild(event);
            span.appendChild(event1);
            span.appendChild(event2);
            card.appendChild(span);
            card.appendChild(image);
            //Attaching to the page
            document.querySelector('div.townevents').appendChild(card);
        }
        }
    });