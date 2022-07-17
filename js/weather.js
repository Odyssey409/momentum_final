function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:nth-child(1)");
      const weather = document.querySelector("#weather span:nth-child(2)");
      const temp = document.querySelector("#weather span:nth-child(3)");
      const humid = document.querySelector("#weather span:nth-child(4)");
      const windspeed = document.querySelector("#weather span:nth-child(5)");
      const pressure = document.querySelector("#weather span:nth-child(6)");
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
      temp.innerText = `${data.main.temp}°C`;
      humid.innerText = `${data.main.humidity}%`;
      windspeed.innerText = `${data.wind.speed}m/s`;
      pressure.innerText = `${data.main.pressure}hPa`;
    });
}

const API_KEY = "ef666d344b524899dad83501494c5d56";

function onGeoError() {
  alert(
    "An ERROR occured while checking your geolocation.\nYou can't use weather service."
  );
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
