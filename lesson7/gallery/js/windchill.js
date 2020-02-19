const t = parseFloat(document.querySelector('#high-temperature').innerHTML);
const s = parseFloat(document.querySelector('#wind-speed').innerHTML);
let windChill = document.querySelector('#wind-chill');
let f = (35.74 + (0.6215 * t) - (35.75 * Math.pow(s,0.16)) + (0.4275 * t * Math.pow(s,0.16)));

if(s > 3 && t <= 50){
    windChill.innerHTML = f.toFixed(1);
} else {
    windChill.innerHTML = 'N/A';
}