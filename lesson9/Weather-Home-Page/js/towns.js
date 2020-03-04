const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then((response) => {
        return response.json();
    })
    .then((jsonObject) => {
        console.table(jsonObject);
        const towns = jsonObject['towns'];
        for (let i=0; i<towns.length; i++){
            if(i===1 || i===4 || i===5){
                let section = document.createElement('section');
                let h2 = document.createElement('h2');
                let h3 = document.createElement('h3');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                let image = document.createElement('img');
                image.setAttribute('src', `./images/town${i}.jpg`);
                image.setAttribute('alt', `${towns[i].name}`);

                h2.textContent = `${towns[i].name}`;
                h3.textContent = `${towns[i].motto}`;
                p1.textContent = `Year Founded: ${towns[i].yearFounded}`;
                p2.textContent = `Population: ${towns[i].currentPopulation}`;
                p3.textContent = `Annual Rain Fall: ${towns[i].averageRainfall}`;

                section.appendChild(h2);
                section.appendChild(h3);
                section.appendChild(p1);
                section.appendChild(p2);
                section.appendChild(p3);
                section.appendChild(image);

                document.querySelector('.towns').appendChild(section);
            }
        }
    });