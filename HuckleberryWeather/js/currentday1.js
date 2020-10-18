const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById('currentday1').textContent = new Date().toLocaleDateString('en-GB', options);
  