// api key and url for default weather.....
const apikey = "4a524a3a0edb2383613cc5b27080bf06";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=howrah";

// default function for fetch weather....
const checkweather = async () => {
    const response = await fetch(apiurl + `&appid=${apikey}`);
    let data = await response.json();
    console.log(data);

    // dom manupulation with fetch data....
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".weatherforcast").innerHTML = data.weather[0].main;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".pressure").innerHTML = Math.round(data.main.pressure) + " hpa";
    document.querySelector(".minmax").innerHTML = `${Math.round(data.main.temp_max)}°c - ${Math.round(data.main.temp_min)}°c`;

    //convert sunrise and sunset time....
    let sunrisetime = data.sys.sunrise;
    let sunsettime = data.sys.sunset;
    let sunrisedate = new Date(sunrisetime * 1000);
    let sunrisehours = sunrisedate.getHours();
    let sunriseminutes = "0" + sunrisedate.getMinutes();
    let formattedsunriseTime = sunrisehours + ':' + sunriseminutes.substr(-2);
    document.querySelector(".sunrise").innerHTML = formattedsunriseTime + " am";
    let sunsetdate = new Date(sunsettime * 1000);
    let sunsethours = sunsetdate.getHours();
    let sunsetminute = "0" + sunsetdate.getMinutes();
    if (sunsethours > "12") {
        sunsethours = sunsethours - 12;
    }
    let formattedsunsettime = sunsethours + ":" + sunsetminute.substr(-2);
    document.querySelector(".sunset").innerHTML = formattedsunsettime + " pm";

    // change weather icon with weather condition.....
    let weatherIcon = document.querySelector(".weathericon");
    if (data.weather[0].main == "Clear") {
        weatherIcon.src = "assets/weathericon/clear.png";
    }
    else if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "assets/weathericon/clouds.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "assets/weathericon/drizzle.png";
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "assets/weathericon/mist.png";
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "assets/weathericon/rain.png";
    }
    else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "assets/weathericon/snow.png";
    }
    else {
        weatherIcon.src = "assets/weathericon/mist.png";
    }
}
checkweather();

// api url for search weather 
const searchapiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchinput = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

// serch weather function for fetch data....
const searchweather = async (city) => {
    const response = await fetch(searchapiurl + city + `&appid=${apikey}`);
    if (response.status == 404) {
        checkweather();
        let a = document.createElement("div");
        a.setAttribute("id", "alert");
        a.innerHTML = "<b>Invalid location...</b>"
        let b = document.getElementsByClassName("container")[0];
        b.append(a);
        setTimeout(() => {
            a.style.display = "none";
        }, 2000);
    }
    else if(searchinput.value == ""){
        checkweather();
        let a = document.createElement("div");
        a.setAttribute("id", "alert");
        a.innerHTML = "<b>Enter any location...</b>"
        let b = document.getElementsByClassName("container")[0];
        b.append(a);
        setTimeout(() => {
            a.style.display = "none";
        }, 2000);
    }
    else {
        let data = await response.json();
        console.log(data);

        // dom manupulation with fetch data....
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".weatherforcast").innerHTML = data.weather[0].main;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        document.querySelector(".pressure").innerHTML = Math.round(data.main.pressure) + " hpa";
        document.querySelector(".minmax").innerHTML = `${Math.round(data.main.temp_max)}°c - ${Math.round(data.main.temp_min)}°c`;

        //convert sunrise and sunset time....
        let sunrisetime = data.sys.sunrise;
        let sunsettime = data.sys.sunset;
        let sunrisedate = new Date(sunrisetime * 1000);
        let sunrisehours = sunrisedate.getHours();
        let sunriseminutes = "0" + sunrisedate.getMinutes();
        let ap2 = (sunrisehours >= 12) ? "pm" : "am";
        if (sunrisehours > "12") {
            sunrisehours = sunrisehours - 12;
        }
        if (sunrisehours == "0") {
            sunrisehours = "12";
        }
        let formattedsunriseTime = sunrisehours + ':' + sunriseminutes.substr(-2);
        document.querySelector(".sunrise").innerHTML = formattedsunriseTime + " " + ap2;
        let sunsetdate = new Date(sunsettime * 1000);
        let sunsethours = sunsetdate.getHours();
        let sunsetminute = "0" + sunsetdate.getMinutes();
        let ap = (sunsethours >= 12) ? "pm" : "am";
        if (sunsethours > "12") {
            sunsethours = sunsethours - 12;
        }
        if (sunsethours == "0") {
            sunsethours = "12";
        }
        let formattedsunsettime = sunsethours + ":" + sunsetminute.substr(-2);
        document.querySelector(".sunset").innerHTML = formattedsunsettime + " " + ap;

        // change weather icon with weather condition.....
        let weatherIcon = document.querySelector(".weathericon");
        if (data.weather[0].main == "Clear") {
            weatherIcon.src = "assets/weathericon/clear.png";
        }
        else if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "assets/weathericon/clouds.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "assets/weathericon/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "assets/weathericon/mist.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "assets/weathericon/rain.png";
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "assets/weathericon/snow.png";
        }
        else {
            weatherIcon.src = "assets/weathericon/mist.png";
        }
    }
}

// button click function...
searchbtn.addEventListener("click", async () => {
    await searchweather(searchinput.value);
    searchinput.value = "";
})