const UrequestURL = 'https://melissahalldesign.github.io/WDD330/HikeBikeGo/json/utahhikes.json';
fetch(UrequestURL) 
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    const utahhikes = jsonObject['utahhikes'];
    for (let i = 0; i < utahhikes.length; i++) {
        //create variable elements
        let hike = document.createElement('section');
        let span = document.createElement('span');
        let h3 = document.createElement('h3');
        h3.setAttribute('class', 'heart'); //Adds class to h3
        let div = document.createElement('div');
        let location = document.createElement('p');
        let difficulty = document.createElement('p');
        let length = document.createElement('p');
        let elevation = document.createElement('p');
        let description = document.createElement('p');
        //modify the contents
        hike.setAttribute('id', utahhikes[i].hikeName);
        hike.addEventListener('click', (e) => {
            console.log(e.target.id);
        });
        h3.textContent = utahhikes[i].hikeName;
        location.textContent = utahhikes[i].location;
        difficulty.textContent =  'Difficulty: ' + utahhikes[i].difficulty;
        length.textContent =  'Length: ' + utahhikes[i].length;
        elevation.textContent =  'Elevation: ' + utahhikes[i].elevation;
        description.textContent = utahhikes[i].description;
        
        //Merge them together
        hike.appendChild(span);
        span.appendChild(h3);
        span.appendChild(div);
        div.appendChild(location);
        div.appendChild(difficulty);
        div.appendChild(length);
        div.appendChild(elevation);
        div.appendChild(description);
        
        //Attaching to the page
        document.querySelector('div.UhikeDisplay').appendChild(hike);
    
    }
});