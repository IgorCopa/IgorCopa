const urlAPI = '//api.openweathermap.org/data/2.5/weather?id=5596475&APPID=76579bd6f115642f3c77a641d14ce74c&units=imperial';

fetch(urlAPI)
  .then((response) => response.json())
  .then((myJsonInfo) => {

    console.log(myJsonInfo);

    let currentWeather = document.querySelector('#current-weather');
    const t = document.querySelector('#high-temperature');
    let humidity = document.querySelector('#humidity');
    const s = document.querySelector('#wind-speed');
    let windChill = document.querySelector('#wind-chill');

    t.innerHTML = myJsonInfo.main.temp_max;
    s.innerHTML = myJsonInfo.wind.speed;
    currentWeather.innerHTML = myJsonInfo.weather[0].main;
    humidity.innerHTML = myJsonInfo.main.humidity;
    
    let f = 35.74 + (0.6215*t.innerHTML) - 35.75*Math.pow(s.innerHTML, 0.16) + (0.4275*t.innerHTML*Math.pow(s.innerHTML, 0.16));

    if(s.innerHTML > 3 && t.innerHTML <= 50){
        windChill.innerHTML = f.toFixed(1);
    } else {
        windChill.innerHTML = 'N/A';
    }

  });

const myDate = new Date();
const todayNumber = myDate.getDay();
const weekDays = new Array(7);
weekDays[0] = 'Sunday';
weekDays[1] = 'Monday';
weekDays[2] = 'Tuesday';
weekDays[3] = 'Wednesday';
weekDays[4] = 'Thursday';
weekDays[5] = 'Friday';
weekDays[6] = 'Saturday';

const apiURL = "//api.openweathermap.org/data/2.5/forecast?id=5596475&APPID=76579bd6f115642f3c77a641d14ce74c&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((myJsInfo) => {

    let myList = myJsInfo.list;
    let forecastDayNumber = todayNumber;
    for(let i = 0; i<myList.length; i++){
      let time = myList[i].dt_txt;
      if(time.includes('18:00:00')){
        console.log(`Found an entry with 18:00:00 in the time. It was report ${i} from the myList of 40.`);
        forecastDayNumber+=1;
        if(forecastDayNumber === 7){
          forecastDayNumber = 0;
        }
        let dayName = document.createElement('span');
        dayName.innerHTML = weekDays[forecastDayNumber];

        let myTemp = document.createElement('p');
        myTemp.innerHTML = `${myJsInfo.list[i].main.temp}\xB0`;

        let iconCode = myJsInfo.list[i].weather[0].icon;
        let iconPath = `//openweathermap.org/img/w/${iconCode}.png`;
        let myIcon = document.createElement('img');
        myIcon.setAttribute('alt', myList[i].weather[0].description);
        myIcon.setAttribute('title', myList[i].weather[0].description);
        myIcon.style.width = '70px';
        myIcon.src = iconPath;

        let myDay = document.createElement('div');
        myDay.setAttribute('class', 'weekdays');
        myDay.appendChild(dayName);
        myDay.appendChild(myIcon);
        myDay.appendChild(myTemp);
        
        let myForecast = document.querySelector('.forecast');
        myForecast.appendChild(myDay);

        let fore = document.querySelector('.fore');
        fore.appendChild(myForecast);
      }
    }
 });