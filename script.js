var icon = $('#icon');
var temperature = $('#temperature');
var humidity = $('humidity');
var windSpeed = $('#windSpeed');
var url;
var key = 'dffa84ce1822c1184cd63ec1b24553c1';


// Event listener for City Search
let searchBtn = $('#btnGet');
searchBtn.on('click', function (event) {
  event.preventDefault();
  // get city name
  var cityName = $('#cityName').val();
  var newCity = $('#cityInput').val();
  console.log(newCity); // sanity check
  var lat = $('#latitude').val();
  var lon =$('longitude').val();
  // build url (this url is for the 5 day forecast not current date)
  urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?q=' + newCity + '&appid=' + key + '&units=imperial'
  // fetch weather
  urlCurrent = 'https://api.openweathermap.org/data/2.5/weather?lat='+ lat + lon +'={lon}&appid='+ key
  fetchFutureWeather();
  fetchCurrentWeather();

});

// // Event listener for clear city history
// let clearSearch = $('#clear-history')
// clearSearch.addEventListener('click', function(){
//   window.localStorage.clear('');
// });





// Fetches api data
function fetchFutureWeather() {
  fetch(urlForecast)
    .then(function (response) {
      return response.json()
    })
    .then(function(data) {

      temperature = data.weather
      // extract the weather icon for that day

      // put that weather icon(string) into the weather icon url
      // https://openweathermap.org/img/wn/" + icon + "@2x.png

      // insert the new icon source into the coresponding img el

    })
};

function fetchCurrentWeather() {
  fetch(urlCurrent)
    .then(function (response) {
      return response.json()
    })
    .then(function(data) {

      lat = data.city.cord.lat;
      lon = data.city.cord.lon;
      city = data;
    })
  };
  


//     // push city input to cities array
//     cities.push(cityInput);
//     //store cities in localStorage
//     localStorage.setItem('cities', JSON.stringify(cities));

//   });
// };

//list.main.temp
//list.main.humidity 
// list.weather.icon
//list.wind.speed
//list.sys.pod says the part of the day 
//city.cord.lat
//city.cord.lon
//city.country
//city.name



//render date for all
$(function () {
  const day = dayjs().format('MM/DD/YY');
  const currentDate = $('#date');
  currentDate.text('Date: ' + day)
  // console.log(day);
  // let now =parseInt(dayjs().format('MDYY'));
  let now = dayjs();
  // console.log(now);
  let newDate = now.add('1', 'day');
  const day1 = $('#date1');

  day1.text('Date: ' + (newDate.$d));
  const newDate2 = now.add('2', 'day');
  const day2 = $('#date2');
  day2.text('Date: ' + (newDate2.$d));
  const newDate3 = now.add('3', 'day');
  const day3 = $('#date3');
  day3.text('Date: ' + (newDate3.$d));
  const day4 = $('#date4');
  const newDate4 = now.add('4', 'day');
  day4.text('Date: ' + (newDate4.$d));
  const day5 = $('#date5');
  const newDate5 = now.add('5', 'day');
  day5.text('Date: ' + (newDate5.$d));
});



// function localWeather(){
//   $.ajax({
//       url: requestUrl,
//       method: 'GET'
//     }).then(function(localResponse) {
//       console.log(localResponse);
//     var city = localResponse.city;
//     console.log(city);
//   })};

