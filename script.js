//JSON заглушка
let dataStart = {
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [{}, {
        "main": {"temp": 291.36}, "weather": [{"icon": "04d"}], "wind": {"speed": 6.27,}
        }, {}, {}, {}, {}, {}, {}, {
        "main": {"temp": 293.36}, "weather": [{"icon": "03d"}], "wind": {"speed": 7.27,}
    }, {}, {}, {}, {}, {}, {}, {
        "main": {"temp": 291.36}, "weather": [{"icon": "04d"}], "wind": {"speed": 5.27,}
    }, {}, {}, {}, {}, {}, {}, {
        "main": {"temp": 290.36}, "weather": [{"icon": "01d"}], "wind": {"speed": 8.27,}
    }, {}, {}, {}, {}, {}, {}, {
        "main": {"temp": 292.36}, "weather": [{"icon": "02d"}], "wind": {"speed": 7.27,}
    }]
}


let city = '';
let day;
const accessKey = '54a8b4cedcb9f125e55ec55c35ee03e8';

const apiKey = '54a8b4cedcb9f125e55ec55c35ee03e8';

let date = new Date();

day1.innerHTML = 'Вс';
day2.innerHTML = 'Пн';
day3.innerHTML = 'Вт';
day4.innerHTML = 'Ср';
day5.innerHTML = 'Чт';

switch (date.getDay()) {
case 0:
    {
        day = 'Вск';
    }
    break;
case 1:
    {
        day = 'Пн';
    }
    break;
case 2:
    {
        day = 'Вт';
    }
    break;
case 3:
    {
        day = 'Ср';
    }
    break;
case 4:
    {
        day = 'Чт';
    }
    break;
case 5:
    {
        day = 'Пт';
    }
    break;
case 6:
    {
        day = 'Сб';
    }
    break;
}

let btn = document.querySelector('button');
let inp = document.querySelector('input');
let img = document.querySelector('img');


function dayAndMonth() {
    let dayOfMon, month;
    let date = new Date();

    if (date.getDate() < 10) {
        dayOfMon = '0' + +date.getDate();
    } else {
        dayOfMon = date.getDate()
    }

    if (date.getMonth()+1 < 10) {
        month = '0' + +(date.getMonth() + 1);
    } else {
        month = date.getMonth()+1
    }

    nowDate.innerHTML = `${dayOfMon}.${month}.${date.getFullYear()}`;
    nowDay.innerHTML = `${day}`;
}

dayAndMonth();

function tiktak() {
    let date = new Date();
    let hour, min, sec;

    if (date.getHours() < 10) {
        hour = '0' + +date.getHours();
    } else {
        hour = date.getHours()
    }

    if (date.getMinutes() < 10) {
        min = '0' + +date.getMinutes();
    } else {
        min = date.getMinutes()
    }

    if (date.getSeconds() < 10) {
        sec = '0' + +date.getSeconds();
    } else {
        sec = date.getSeconds()
    }

    nowTime.innerHTML = `${hour}:${min}:${sec}`
}

setTimeout(tiktak, 0);
setInterval(tiktak, 1000);

//Заглушка
let img1 = document.querySelector('#img1');
let urlPic1 = `https://openweathermap.org/img/wn/${dataStart.list[1].weather[0].icon}@2x.png`;
img1.src = urlPic1;

let img2 = document.querySelector('#img2');
let urlPic2 = `https://openweathermap.org/img/wn/${dataStart.list[8].weather[0].icon}@2x.png`;
img2.src = urlPic2;

let img3 = document.querySelector('#img3');
let urlPic3 = `https://openweathermap.org/img/wn/${dataStart.list[15].weather[0].icon}@2x.png`;
img3.src = urlPic3;

let img4 = document.querySelector('#img4');
let urlPic4 = `https://openweathermap.org/img/wn/${dataStart.list[22].weather[0].icon}@2x.png`;
img4.src = urlPic4;

let img5 = document.querySelector('#img5');
let urlPic5 = `https://openweathermap.org/img/wn/${dataStart.list[29].weather[0].icon}@2x.png`;
img5.src = urlPic5;

day1_temp.innerHTML = Math.round(+(dataStart.list[1].main.temp) - 273.15) + '°C';
day2_temp.innerHTML = Math.round(+(dataStart.list[8].main.temp) - 273.15) + '°C';
day3_temp.innerHTML = Math.round(+(dataStart.list[15].main.temp) - 273.15) + '°C';
day4_temp.innerHTML = Math.round(+(dataStart.list[22].main.temp) - 273.15) + '°C';
day5_temp.innerHTML = Math.round(+(dataStart.list[29].main.temp) - 273.15) + '°C';

day1_wind.innerHTML = Math.round(dataStart.list[1].wind.speed) + 'м/с';
day2_wind.innerHTML = Math.round(dataStart.list[8].wind.speed) + 'м/с';
day3_wind.innerHTML = Math.round(dataStart.list[15].wind.speed) + 'м/с';
day4_wind.innerHTML = Math.round(dataStart.list[22].wind.speed) + 'м/с';
day5_wind.innerHTML = Math.round(dataStart.list[29].wind.speed) + 'м/с';

urlPic = `https://openweathermap.org/img/wn/${dataStart.list[22].weather[0].icon}@2x.png`;
img.src = urlPic



async function checkWeather() {
    city = inp.value;

    let apiURL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}&lang=ru`;
    const response = await fetch(apiURL);
    let data = await response.json();
console.dir(data);

    let lat = data.coord.lat;
    let lon = data.coord.lon;

    let apiURL5 = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    const response5 = await fetch(apiURL5);
    let data5 = await response5.json();

    let img1 = document.querySelector('#img1');
    let urlPic1 = `https://openweathermap.org/img/wn/${data5.list[1].weather[0].icon}@2x.png`;
    img1.src = urlPic1;

    let img2 = document.querySelector('#img2');
    let urlPic2 = `https://openweathermap.org/img/wn/${data5.list[8].weather[0].icon}@2x.png`;
    img2.src = urlPic2;

    let img3 = document.querySelector('#img3');
    let urlPic3 = `https://openweathermap.org/img/wn/${data5.list[15].weather[0].icon}@2x.png`;
    img3.src = urlPic3;

    let img4 = document.querySelector('#img4');
    let urlPic4 = `https://openweathermap.org/img/wn/${data5.list[22].weather[0].icon}@2x.png`;
    img4.src = urlPic4;

    let img5 = document.querySelector('#img5');
    let urlPic5 = `https://openweathermap.org/img/wn/${data5.list[29].weather[0].icon}@2x.png`;
    img5.src = urlPic5;

      

        day1_temp.innerHTML = Math.round(+(data5.list[1].main.temp) - 273.15) + '°C';
        day2_temp.innerHTML = Math.round(+(data5.list[8].main.temp) - 273.15) + '°C';
        day3_temp.innerHTML = Math.round(+(data5.list[15].main.temp) - 273.15) + '°C';
        day4_temp.innerHTML = Math.round(+(data5.list[22].main.temp) - 273.15) + '°C';
        day5_temp.innerHTML = Math.round(+(data5.list[29].main.temp) - 273.15) + '°C';

        day1_wind.innerHTML = Math.round(data5.list[1].wind.speed) + 'м/с';
        day2_wind.innerHTML = Math.round(data5.list[8].wind.speed) + 'м/с';
        day3_wind.innerHTML = Math.round(data5.list[15].wind.speed) + 'м/с';
        day4_wind.innerHTML = Math.round(data5.list[22].wind.speed) + 'м/с';
        day5_wind.innerHTML = Math.round(data5.list[29].wind.speed) + 'м/с';

    console.log(data);
    console.log(data5);
    console.log(lat);
    console.log(lon);

//левый блок

    city2.innerHTML = data.name;
    desc.innerHTML = data.weather[0].description;
    temp.innerHTML = Math.round(data.main.temp);
    feels.innerHTML = Math.round(data.main.feels_like);
    wind.innerHTML = Math.round(data.wind.speed);

//центральный блок

    urlPic = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    img.src = urlPic

//правый блок

    pressure.innerHTML = Math.round(+data.main.pressure * 0.750063755419211);
    humidity.innerHTML = data.main.humidity;
    cloud.innerHTML = data.clouds.all;
    visibility.innerHTML = +data.visibility / 1000;

//нижний блок

    day1_temp.innerHTML = Math.round(+(data5.list[1].main.temp) - 273.15) + '°C';
    day2_temp.innerHTML = Math.round(+(data5.list[8].main.temp) - 273.15) + '°C';
    day3_temp.innerHTML = Math.round(+(data5.list[15].main.temp) - 273.15) + '°C';
    day4_temp.innerHTML = Math.round(+(data5.list[22].main.temp) - 273.15) + '°C';
    day5_temp.innerHTML = Math.round(+(data5.list[29].main.temp) - 273.15) + '°C';

    day1_wind.innerHTML = Math.round(data5.list[1].wind.speed) + 'м/с';
    day2_wind.innerHTML = Math.round(data5.list[8].wind.speed) + 'м/с';
    day3_wind.innerHTML = Math.round(data5.list[15].wind.speed) + 'м/с';
    day4_wind.innerHTML = Math.round(data5.list[22].wind.speed) + 'м/с';
    day5_wind.innerHTML = Math.round(data5.list[29].wind.speed) + 'м/с';

    switch (date.getDay()) {
    case 0:
        {
            day1.innerHTML = 'Пн';
            day2.innerHTML = 'Вт';
            day3.innerHTML = 'Ср';
            day4.innerHTML = 'Чт';
            day5.innerHTML = 'Пт';
        }
        break;
    case 1:
        {
            day1.innerHTML = 'Вт';
            day2.innerHTML = 'Ср';
            day3.innerHTML = 'Чт';
            day4.innerHTML = 'Пт';
            day5.innerHTML = 'Сб';
        }
        break;
    case 2:
        {
            day1.innerHTML = 'Ср';
            day2.innerHTML = 'Чт';
            day3.innerHTML = 'Пт';
            day4.innerHTML = 'Сб';
            day5.innerHTML = 'Вс';
        }
        break;
    case 3:
        {
            day1.innerHTML = 'Чт';
            day2.innerHTML = 'Пт';
            day3.innerHTML = 'Сб';
            day4.innerHTML = 'Вс';
            day5.innerHTML = 'Пн';
        }
        break;
    case 4:
        {
            day1.innerHTML = 'Пт';
            day2.innerHTML = 'Сб';
            day3.innerHTML = 'Вс';
            day4.innerHTML = 'Пн';
            day5.innerHTML = 'Вт';
        }
        break;
    case 5:
        {
            day1.innerHTML = 'Сб';
            day2.innerHTML = 'Вс';
            day3.innerHTML = 'Пн';
            day4.innerHTML = 'Вт';
            day5.innerHTML = 'Ср';
        }
        break;
    case 6:
        {
            day1.innerHTML = 'Вс';
            day2.innerHTML = 'Пн';
            day3.innerHTML = 'Вт';
            day4.innerHTML = 'Ср';
            day5.innerHTML = 'Чт';
        }
        break;
    }

}

btn.addEventListener('click', checkWeather);
