// initialize the favorites from local storage or otherwise create an empty array
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// add class 'fav' to each favorite
favorites.forEach(function(favorite) {
  document.getElementById(favorite).className = 'fave';
});
// create click eventlistener
document.querySelector('.heart').addEventListener('click', function(e) {
  let id = e.target.id,
      item = e.target,
      index = favorites.indexOf(id);
  // if target doesn't have an id
  if (!id) return;
  // if item is not favorite
  if (index == -1) {
    favorites.push(id);
    item.className = 'fave';
  // item is already favorite
  } else {
    favorites.splice(index, 1);
    item.className = '';
  }
  // store array in local storage
  localStorage.setItem('favorites', JSON.stringify(favorites));
  //localStorage.removeItem('favorites', JSON.stringify(favorites));
});
//remove item from localstorage
document.querySelector('.heart').removeEventListener('click', function(e) {
    let id = e.target.id,
        item = e.target,
        index = favorites.indexOf(id);
    // if target doesn't have an id
    if (!id) return;
    // if item is not favorite
    if (index == -1) {
      favorites.push(id);
      item.className = 'fave';
    // item is already favorite
    } else {
      favorites.splice(index, 1);
      item.className = '';
    }
    //remove
    localStorage.removeItem('favorites', JSON.stringify(favorites));
  });