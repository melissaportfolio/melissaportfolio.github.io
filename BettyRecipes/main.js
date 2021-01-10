var item = document.getElementsByClassName("expand");
var i;

for (i = 0; i < item.length; i++) {
  item[i].addEventListener("click", function() {
    this.classList.toggle("open");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function toggleMenu() {
  document.querySelector('#navigation').classList.toggle('open-menu');
}
document.querySelector('#menu').addEventListener('click', toggleMenu);