var d = new Date();
var currentday1 = d.getDay();
if (currentday1 == 5) {
    document.getElementsByClassName("pancakebanner")[0].classList.toggle("banner");
}