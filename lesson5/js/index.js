window.onload = (() => {
    const myDate = document.querySelector('#currentDate');

    let dt = new Date();
    let weekDay = dt.getDay();
    let myDay = dt.getDate();
    let myMonth = dt.getMonth();
    let myYear = dt.getFullYear();

    const daysOfWeek = [
        "Sunday",
        "Monday", 
        "Tuesday", 
        "Wednesday", 
        "Thursday", 
        "Friday", 
        "Saturday"
    ];

    const monthsOfYear = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    myDate.innerHTML = `${daysOfWeek[weekDay]}, ${myDay} ${monthsOfYear[myMonth]} ${myYear}`;

    const toggleButton = document.querySelector('#toggleButton');
    const ulDrop = document.querySelector('#ulDrop');
    toggleButton.addEventListener('click', toggleMenu);
    function toggleMenu(){
        toggleButton.classList.toggle('hide');
        if(toggleButton.classList.contains('hide')){
            toggleButton.innerHTML = '&Cross;';
        } else {
            toggleButton.innerHTML = '&#9776;';
        }
        ulDrop.classList.toggle('hide');
    }

    const banner = document.querySelector('.banner');
    if(daysOfWeek[weekDay] == daysOfWeek[5]){
        banner.style.display = 'block';
    } else {
        banner.style.display = 'none';
    }
});