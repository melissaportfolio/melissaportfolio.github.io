const DrequestURL = 'https://melissahalldesign.github.io/WDD330/HikeBikeGo/json/davishikes.json';
fetch(DrequestURL) 
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    const davishikes = jsonObject['davishikes'];
    for (let i = 0; i < davishikes.length; i++) {
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
        hike.setAttribute('id', davishikes[i].hikeName);
        hike.addEventListener('click', (e) => {
            console.log(e.target.id);
        });
        h3.textContent = davishikes[i].hikeName;
        location.textContent = davishikes[i].location;
        difficulty.textContent =  'Difficulty: ' + davishikes[i].difficulty;
        length.textContent =  'Length: ' + davishikes[i].length;
        elevation.textContent =  'Elevation: ' + davishikes[i].elevation;
        description.textContent = davishikes[i].description;
        
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
        document.querySelector('div.DhikeDisplay').appendChild(hike);
    
    }
});