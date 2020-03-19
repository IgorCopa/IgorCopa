const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then((response) => {
        return response.json();
    })
    .then((jsonObject) => {
        console.table(jsonObject);
        const towns = jsonObject['towns'];
        for (let i=0; i<towns.length; i++){
            if(towns[i].name==='Soda Springs'){
                const events = document.querySelector('.events');
                events.style.width = '100%';

                for(let ev=0; ev<towns[i].events.length; ev++){
                    let p1 = document.createElement('p');
                    p1.innerHTML = towns[i].events[ev];
                    p1.style.color = 'rgb(0, 145, 0)';

                    events.appendChild(p1);
                }
            }
        }
    });