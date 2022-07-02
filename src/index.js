import "./style.css";

let now = new Date();

let h2 = document.querySelector("h2");

let hours = now.getHours();
let minutes = now.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

h2.innerHTML = `${day} ${hours}:${minutes}`;

const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
searchButton.addEventListener("click", () => {
  const inputValue = searchInput.value;
  let h3 = document.querySelector("h3");
  h3.innerHTML = inputValue;

  let city = inputValue;
  let key = "574c23a3ea73b7b0e06ebb1f579f830a";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

  function displayWeather(response) {
    let h4 = document.querySelector("h4");
    let temperature = Math.round(response.data.main.temp);

    h4.innerHTML = `${temperature}°C`;
  }

  const axios = require("axios").default;
  axios.get(`${url}&appid=${key}`).then(displayWeather);
});
