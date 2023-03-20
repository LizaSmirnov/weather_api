var icon= $('#icon');
var temperature= $('#temperature');
var humidity = $('humidity');
var windSpeed = $('#windSpeed');
    
var cityName =$('#cityName').value;
var newCity = $('#cityInput').value;
cityName='--'+newCity+'--';
var key = 'dffa84ce1822c1184cd63ec1b24553c1';
var url = 'https://api.openweathermap.org/data/2.5/forecast?q='+ newCity +'&appid='+ key


// Event listener for City Search
let searchBtn = $('#btnGet');
searchBtn.on('click',function(event){
  event.preventDefault();
  fetchWeather();
  ajaxRequest();
});

// Event listener for clear city history
// let clearSearch = $('#clear-history')
// clearSearch.addEventListener('click', function(){
//   window.localStorage.clear('');
// });

// Fetches api data
function fetchWeather() {
  fetch(url)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
  console.log(data)
  .catch(err => alert('Not valid entry'))
})};

// AJAX request used to store information of city search
//to the local storage
function ajaxRequest(){
$.ajax({
  url: url,
  method: 'GET',
}).then(function (response) {
  console.log(response);
  lat = response.coord.lat;
  lon = response.coord.lon;

  // push city input to cities array
  cities.push(cityInput);
  //store cities in localStorage
  localStorage.setItem('cities', JSON.stringify(cities));

});
};

//render date for all
$(function(){
  const day= dayjs().format('MM/DD/YY');
  const currentDate=$('#date');
  currentDate.text('Date: ' + day)
  //all day1-5 is currentdate +1
  // let now =parseInt(dayjs().format('MDYY'));
  let now= dayjs();
  console.log(now);
  let newDate = now.add('1','day');
  // let string = JSON.stringify(newDate.$d);
  // console.log(string);
  // console.log(typeof(string));

  const day1=$('#date1');
  day1.text('Date: ' + (newDate.$d));
  const newDate2 = now.add('2','day');
  const day2=$('#date2');
  day2.text('Date: ' + (newDate2.$d));
  const newDate3 = now.add('3','day');
  const day3=$('#date3');
  day3.text('Date: ' + (newDate3.$d));
  const day4=$('#date4');
  const newDate4 = now.add('4','day');
  day4.text('Date: ' + (newDate4.$d));
  const day5=$('#date5');
  const newDate5 = now.add('5','day');
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

