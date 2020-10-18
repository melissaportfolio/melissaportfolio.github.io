const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL) 
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const prophets = jsonObject['prophets'];
        //console.table(jsonObject); //temporary testing
        for (let i = 0; i < prophets.length; i++) { 
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let birthdate = document.createElement('p');
            let birthplace = document.createElement('p');
            let image = document.createElement('img');
            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
            birthdate.textContent = 'Date of Birth: ' + prophets[i].birthdate;
            birthplace.textContent =  'Place of Birth: ' + prophets[i].birthplace;
            image.textContent = prophets[i].name + ' ' + prophets[i].imageurl;
            image.setAttribute('src', prophets[i].imageurl);
            image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' - ' + prophets[i].order);
            card.appendChild(h2);
            card.appendChild(birthdate);
            card.appendChild(birthplace);
            card.appendChild(image);
            document.querySelector('div.cards').appendChild(card);
        }
    });
//for (let i = 0; i < prophets.length; i++) {
    /*Now we just build the HTML of the prophet card using the createElement(), textContent(), 
    and appendChild() methods on the document. We will place all of these prophet 'cards' in 
    already marked up, generic division <div> element on the page that has a class attribute 
    value of "cards". Let's go ahead and make each card a <section> element with standard 
    heading <h2> and paragraphs <p> for field items and an image <img>. This code snippet, 
    which resides in the for loop, adds the <h2> element only.*/
    /*

    ► Once you have that working, go ahead and add three other elements for the birth date, 
    birth place, and external image reference as shown in the example screenshots above.
    You will not be using .textContent for the <img>. Rather, you will run the .setAttribute() 
    methods for the src and alt attributes. The code below assumes that you created an <img> 
    element and assigned it to a variable named "image".*/
    /*image.setAttribute('src', prophets[i].imageurl);*/

    /*Set the alt attribute value to be the prophets full name followed by a dash and their latter-day prophet number.
For example, alt="Heber J. Grant - 7"*/