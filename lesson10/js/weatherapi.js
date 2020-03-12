const apiURL = '//api.openweathermap.org/data/2.5/weather?id=524901&APPID=76579bd6f115642f3c77a641d14ce74c&units=imperial';

fetch(apiURL)
    .then((response) => response.json())
    .then((weatherInformation) => {
        console.log(weatherInformation);
        document.getElementById('current-temp').innerHTML = weatherInformation.main.temp;
        const imagesrc = `https://openweathermap.org/img/w/${weatherInformation.weather[0].icon}.png`;
        const desc = weatherInformation.weather[0].description;
        document.getElementById('imagesrc').innerHTML = imagesrc;
        document.getElementById('icon').setAttribute('src', imagesrc);
        document.getElementById('icon').setAttribute('alt', desc);
    });



