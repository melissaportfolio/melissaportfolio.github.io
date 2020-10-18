const ZrequestURL = 'https://melissahalldesign.github.io/WDD330/HikeBikeGo/json/zionhikes.json';
fetch(ZrequestURL) 
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    const zionhikes = jsonObject['zionhikes'];
    for (let i = 0; i < zionhikes.length; i++) {
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
        hike.setAttribute('id', zionhikes[i].hikeName);
        hike.addEventListener('click', (e) => {
            console.log(e.target.id);
        });
        h3.textContent = zionhikes[i].hikeName;
        location.textContent = zionhikes[i].location;
        difficulty.textContent =  'Difficulty: ' + zionhikes[i].difficulty;
        length.textContent =  'Length: ' + zionhikes[i].length;
        elevation.textContent =  'Elevation: ' + zionhikes[i].elevation;
        description.textContent = zionhikes[i].description;
        
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
        document.querySelector('div.ZhikeDisplay').appendChild(hike);
    
    }
});