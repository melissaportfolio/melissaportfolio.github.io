//f = 35.74 + 0.6215t - 35.75s(0.16) + 0.4275ts(0.16)
//chill = 35.74 + 0.6215(temp) - (35.75(speed)0.16) + (0.4275) * temp * speed * 0.16
var temp = parseFloat(document.getElementById('temp').textContent);
var speed = parseFloat(document.getElementById('speed').textContent);
if (temp <= 50 && speed >= 3) {
    var calc = 35.74 + temp * 0.6215 - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    document.getElementById('calc').innerHTML = Math.round(calc);
}
else {
    document.write = 'N/A';
}