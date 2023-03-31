//GLOBAL VARIABLES
var key = "dffa84ce1822c1184cd63ec1b24553c1";
var searchHis = $("#search-history");
var inputCity = $("#cityInput").val();

var urlForecast =
  "https://api.openweathermap.org/data/2.5/forecast?q=" +
  inputCity +
  "&appid=" +
  key +
  "&units=imperial";

var urlCurrent =
  "https://api.openweathermap.org/data/2.5/weather?q=" +
  inputCity +
  "&appid=" +
  key +
  "&units=imperial";

//EVENT LISTENER FOR SEARCH BUTTON
let searchBtn = $("#btnGet");
searchBtn.on("click", function (event) {
  var inputCity = $("#cityInput").val();
  event.preventDefault();
  $(".col-lg-8").show();
  fetchFutureWeather(inputCity); //bottom 5 day forcast weather
  fetchCurrentWeather(inputCity); //current weather
  changeCityName(inputCity); //generate main name
  storeToLocalStorage(); //how to save to local storage
  generateButton(); //create buttons of cities to check history
});

//EVENT LISTENER TO CLEAR LOCAL STORAGE
$("#clear-history").on("click", function (event) {
  localStorage.clear();
  window.location.reload();
});

//CHANGE MAIN CITY NAME
function changeCityName(inputCity) {
  let nameChange = $("#cityName");
  nameChange.text(inputCity.toUpperCase());
}

//call to fetch current data for that city
function fetchCurrentWeather(inputCity) {
  var urlCurrent =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    inputCity +
    "&appid=" +
    key +
    "&units=imperial";

  fetch(urlCurrent)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      let iconImg = $("#local-icon");
      cityIcon = response.weather[0].icon;
      iconImg.attr(
        "src",
        "https://openweathermap.org/img/wn/" + cityIcon + ".png"
      );

      let temp = $("#temperature");
      cityTemp = response.main.temp;
      temp.text("Temp: " + cityTemp + "F");

      let humidity = $("#humidity");
      hum = response.main.humidity;
      humidity.text("Humidity: " + hum + "g/kg");

      let wind = $("#windSpeed");
      air = response.wind.speed;
      wind.text("Wind Speed: " + air + "mph");
    });
}

// Fetches future forecast data
function fetchFutureWeather(inputCity) {
  var urlForecast =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    inputCity +
    "&appid=" +
    key +
    "&units=imperial";

  fetch(urlForecast)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //Forecast day 1
      let icon1Img = $(".card-img-top1");
      icon1 = data.list[0].weather[0].icon;
      icon1Img.attr(
        "src",
        "https://openweathermap.org/img/wn/" + icon1 + ".png"
      );

      let temp1 = $("#temp1");
      tempData1 = data.list[0].main.temp;
      temp1.text("Temp: " + tempData1 + "F");

      let wind1 = $("#wind1");
      windData1 = data.list[0].wind.speed;
      wind1.text("Wind Speed: " + windData1 + "mph");

      let hum1 = $("#hum1");
      humData1 = data.list[0].main.humidity;
      hum1.text("Wind Speed: " + humData1 + "g/kg");

      //Forecast day 2
      let icon2Img = $(".card-img-top2");
      icon2 = data.list[8].weather[0].icon;
      icon2Img.attr(
        "src",
        "https://openweathermap.org/img/wn/" + icon2 + ".png"
      );

      let temp2 = $("#temp2");
      tempData2 = data.list[8].main.temp;
      temp2.text("Temp: " + tempData2 + "F");

      let wind2 = $("#wind2");
      windData2 = data.list[8].wind.speed;
      wind2.text("Wind Speed: " + windData2 + "mph");

      let hum2 = $("#hum2");
      humData2 = data.list[8].main.humidity;
      hum2.text("Wind Speed: " + humData2 + "g/kg");

      //Forecast day 3
      let icon3Img = $(".card-img-top3");
      icon3 = data.list[16].weather[0].icon;
      icon3Img.attr(
        "src",
        "https://openweathermap.org/img/wn/" + icon3 + ".png"
      );

      let temp3 = $("#temp3");
      tempData3 = data.list[16].main.temp;
      temp3.text("Temp: " + tempData3 + "F");

      let wind3 = $("#wind3");
      windData3 = data.list[16].wind.speed;
      wind3.text("Wind Speed: " + windData3 + "mph");

      let hum3 = $("#hum3");
      humData3 = data.list[16].main.humidity;
      hum3.text("Wind Speed: " + humData3 + "g/kg");

      //Forecast day 4
      let icon4Img = $(".card-img-top4");
      icon4 = data.list[24].weather[0].icon;
      icon4Img.attr(
        "src",
        "https://openweathermap.org/img/wn/" + icon4 + ".png"
      );

      let temp4 = $("#temp4");
      tempData4 = data.list[24].main.temp;
      temp4.text("Temp: " + tempData4 + "F");

      let wind4 = $("#wind4");
      windData4 = data.list[24].wind.speed;
      wind4.text("Wind Speed: " + windData4 + "mph");

      let hum4 = $("#hum4");
      humData4 = data.list[24].main.humidity;
      hum4.text("Wind Speed: " + humData4 + "g/kg");

      //Forecast day 5
      let icon5Img = $(".card-img-top5");
      icon5 = data.list[32].weather[0].icon;
      icon5Img.attr(
        "src",
        "https://openweathermap.org/img/wn/" + icon5 + ".png"
      );

      let temp5 = $("#temp5");
      tempData5 = data.list[32].main.temp;
      temp5.text("Temp: " + tempData5 + "F");

      let wind5 = $("#wind5");
      windData5 = data.list[32].wind.speed;
      wind5.text("Wind Speed: " + windData5 + "mph");

      let hum5 = $("#hum5");
      humData5 = data.list[32].main.humidity;
      hum5.text("Wind Speed: " + humData5 + "g/kg");
    });
}

//SET DATES
$(function () {
  const day = dayjs().format("MM/DD/YY");
  const currentDate = $("#date");
  currentDate.text("Date: " + day);

  let now = dayjs();
  let newDate = now.add("1", "day");
  const day1 = $("#date1");
  day1.text("Date: " + newDate.$d);
  const newDate2 = now.add("2", "day");
  const day2 = $("#date2");
  day2.text("Date: " + newDate2.$d);
  const newDate3 = now.add("3", "day");
  const day3 = $("#date3");
  day3.text("Date: " + newDate3.$d);
  const day4 = $("#date4");
  const newDate4 = now.add("4", "day");
  day4.text("Date: " + newDate4.$d);
  const day5 = $("#date5");
  const newDate5 = now.add("5", "day");
  day5.text("Date: " + newDate5.$d);
});

//SAVE TO LOCAL STORAGE
function storeToLocalStorage() {
  new_data = $("#cityInput").val();

  if (localStorage.getItem("data") == null) {
    localStorage.setItem("data", "[]");
  }
  old_data = JSON.parse(localStorage.getItem("data"));
  old_data.push(new_data);

  localStorage.setItem("data", JSON.stringify(old_data));
}

//GENERATE HISTORY BUTTONS
function generateButton() {
  recentSearch = JSON.parse(localStorage.getItem("data")) || [];

  var buttonEl = $("<button>", { class: "btn btn-secondary" });
  buttonEl.text(`${recentSearch[recentSearch.length - 1]}`);
  searchHis.prepend(buttonEl);
  console.log(recentSearch);
}
function allButtons() {
  recentSearch = JSON.parse(localStorage.getItem("data")) || [];
  for (var i = 0; i < recentSearch.length; i++) {
    var buttonEl = $("<button>", { class: "btn btn-secondary" });
    buttonEl.text(`${recentSearch[i]}`);
    searchHis.prepend(buttonEl);
  }
}
allButtons();

//EVENT LISTENER FOR HISTORY BUTTONS TO RETURN TO THEIR SEARCHES
searchHis.on("click", ".btn-secondary", function (event) {
  event.preventDefault();
  buttonSaved = event.target.textContent;
  fetchCurrentWeather(buttonSaved);
  fetchFutureWeather(buttonSaved);
  changeCityName(buttonSaved);
});
