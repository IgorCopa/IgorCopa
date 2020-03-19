window.onload = (() => {
    const myDate = document.querySelector('#currentDate');

    let dt = new Date();
    let myDay = dt.getDate();
    let myMonth = dt.getMonth()+1;
    let myYear = dt.getFullYear();

    myDate.innerHTML = `${myMonth}/${myDay}/${myYear}`;
});