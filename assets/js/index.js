document.getElementById("searcBtn").addEventListener("click", apiCall);
navigator.geolocation.getCurrentPosition((position) => {
  console.log(position);
  console.log();
  console.log();
  mylocApi();
  async function mylocApi() {
    const myLoc = await fetch(
      ` https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=e0b8e8e807d7bee08e7031d3de1fc84d`
    );
    const data = await myLoc.json();
    console.log(data);
    document.getElementById("search").value = `${data.name}`;
    document.getElementById("location").innerHTML = `Location : ${data.name}`;
    apiCall();
  }
});
const input = document.getElementById.value;

async function apiCall() {
  console.log("FUNCTION IS");

  const city = document.getElementById("search").value;

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e0b8e8e807d7bee08e7031d3de1fc84d`
  );
  console.log(res.ok);
  const result = await res.json();

  if (res.ok == false) {
    document.getElementById("alert").style.display = "block";
    document.getElementById("search").value = "";
  } else {
    document.getElementById("alert").style.display = "none";
  }
  console.log(result);
  const temp = result.main;
  document.getElementById("location").innerHTML = `Location : ${result.name}`;

  document.getElementById(
    "image"
  ).src = `https://openweathermap.org/img/wn/${result.weather[0].icon}@4x.png`;
  document.getElementById("temp").innerHTML = `Temperature : ${Math.floor(
    temp.temp - 273.15
  )}°C`;
  document.getElementById(
    "cloud"
  ).innerHTML = `${result.weather[0].description}`;
  document.getElementById("minTemp").innerHTML = `Min-Temperature: ${Math.floor(
    temp.temp_min - 273.15
  )}°C`;
  document.getElementById("maxTemp").innerHTML = `Max-Temperature: ${Math.floor(
    temp.temp_max - 273.15
  )}°C`;
  document.getElementById("humidity").innerHTML = `Humidity: ${Math.floor(
    temp.humidity
  )} %`;
  document.getElementById("speed").innerHTML = `Wind Speed : ${Math.floor(
    result.wind.speed
  )} km/hr`;
}
