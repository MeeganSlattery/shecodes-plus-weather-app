function displayCurrentDate() {
  let currentDate = new Date();
  let options = { hour: "2-digit", minute: "2-digit", hour12: false };
  let globalTime = currentDate.toLocaleTimeString("en-US", options);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let weekDay = days[currentDate.getDay()];
  let currentDay = document.querySelector("#current-day");
  currentDay.innerHTML = `Today <br /> ${weekDay} ${globalTime}`;
}
displayCurrentDate();

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");

  // let h2 = document.querySelector("h2");
  // h2.innerHTML = searchInput.value;

  let apiKey = "17a319820c3ec328dbc5330363baec28";

  let citySearch = searchInput.value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${apiKey}&&units=metric`;

  function displayTemp(response) {
    console.log(response);
    let h1 = document.querySelector("h1");
    h1.innerHTML = `${Math.round(response.data.main.temp)}°C`;
    let h2 = document.querySelector("h2");
    h2.innerHTML = `${response.data.name}, ${response.data.sys.country}`;
  }
  function displayPressure(response) {
    let pressureMillibars = document.querySelector("#millibar");
    pressureMillibars.innerHTML = `${response.data.main.pressure}`;
  }
  function displayHumidity(response) {
    let humidityPercentage = document.querySelector("#percent");
    humidityPercentage.innerHTML = `${response.data.main.humidity}`;
  }
  function displayWind(response) {
    let windSpeed = document.querySelector("#wind-speed");
    windSpeed.innerHTML = `${Math.round(response.data.wind.speed)}`;
  }
  function dailyHighLowTemp(response) {
    let highTemp = document.querySelector("#daily-high-temp");
    highTemp.innerHTML = `${Math.round(response.data.main.temp_max)}`;

    let lowTemp = document.querySelector("#daily-low-temp");
    lowTemp.innerHTML = `${Math.round(response.data.main.temp_min)}`;
  }
  function displayForcast(response) {
    let forcast = document.querySelector("#weather-forcast");
    forcast.innerHTML = `${response.data.weather[0].description}`;
  }

  axios.get(apiUrl).then(displayTemp);
  axios.get(apiUrl).then(displayPressure);
  axios.get(apiUrl).then(displayHumidity);
  axios.get(apiUrl).then(displayWind);
  axios.get(apiUrl).then(dailyHighLowTemp);
  axios.get(apiUrl).then(displayForcast);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function displayPosition(position) {
  console.log(position);

  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  console.log(latitude, longitude);

  let apiKey = "17a319820c3ec328dbc5330363baec28";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  function getCurrentTemp(response) {
    let temperature = Math.round(response.data.main.temp);
    console.log(temperature);
    let geoCity = response.data.name;
    console.log(geoCity);
    let h2 = document.querySelector("h2");
    h2.innerHTML = geoCity;
    let h1 = document.querySelector("h1");
    h1.innerHTML = `${temperature}°C`;
  }
  function displayPressure(response) {
    let pressureMillibars = document.querySelector("#millibar");
    pressureMillibars.innerHTML = `${response.data.main.pressure}`;
  }
  function displayHumidity(response) {
    let humidityPercentage = document.querySelector("#percent");
    humidityPercentage.innerHTML = `${response.data.main.humidity}`;
  }
  function displayWind(response) {
    let windSpeed = document.querySelector("#wind-speed");
    windSpeed.innerHTML = `${Math.round(response.data.wind.speed)}`;
  }
  function dailyHighLowTemp(response) {
    let highTemp = document.querySelector("#daily-high-temp");
    highTemp.innerHTML = `${Math.round(response.data.main.temp_max)}`;

    let lowTemp = document.querySelector("#daily-low-temp");
    lowTemp.innerHTML = `${Math.round(response.data.main.temp_min)}`;
  }
  function displayForcast(response) {
    let forcast = document.querySelector("#weather-forcast");
    forcast.innerHTML = `${response.data.weather[0].description}`;
  }
  axios.get(apiUrl).then(getCurrentTemp);
  axios.get(apiUrl).then(displayPressure);
  axios.get(apiUrl).then(displayHumidity);
  axios.get(apiUrl).then(displayWind);
  axios.get(apiUrl).then(dailyHighLowTemp);
  axios.get(apiUrl).then(displayForcast);
  axios
    .get(apiUrl)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(displayPosition);
}

let geoButton = document.querySelector("#current-Location");
geoButton.addEventListener("click", getCurrentPosition);

// function degreeButton() {
//  let h1 = document.querySelector("h1");
// if (h1.innerHTML === "°62F") {
//  h1.innerHTML = h1.dataset.original || h1.innerHTML;
// } else {
//  h1.dataset.original = h1.innerHTML;
// h1.innerHTML = "°62F";
// }
// }
// let button = document.querySelector("#dagree-button");
// button.addEventListener("click", degreeButton);
