const SLrequestURL = 'https://melissahalldesign.github.io/WDD330/HikeBikeGo/json/saltlakehikes.json';
fetch(SLrequestURL) 
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    const saltlakehikes = jsonObject['saltlakehikes'];
    for (let i = 0; i < saltlakehikes.length; i++) {
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
        hike.setAttribute('id', saltlakehikes[i].hikeName);
        hike.addEventListener('click', (e) => {
            console.log(e.target.id);
        });
        h3.textContent = saltlakehikes[i].hikeName;
        location.textContent = saltlakehikes[i].location;
        difficulty.textContent =  'Difficulty: ' + saltlakehikes[i].difficulty;
        length.textContent =  'Length: ' + saltlakehikes[i].length;
        elevation.textContent =  'Elevation: ' + saltlakehikes[i].elevation;
        description.textContent = saltlakehikes[i].description;
        
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
        document.querySelector('div.ShikeDisplay').appendChild(hike);
    
    }
});