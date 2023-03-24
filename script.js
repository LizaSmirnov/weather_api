var key = 'dffa84ce1822c1184cd63ec1b24553c1';


// Event listener for City Search
let searchBtn = $('#btnGet');
searchBtn.on('click', function (event) {
  event.preventDefault();
  $('.col-lg-8').show();

  inputCity = $('#cityInput').val();
  console.log(inputCity); // sanity check

  urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?q=' + inputCity + '&appid=' + key + '&units=imperial';
 
  urlCurrent = 'https://api.openweathermap.org/data/2.5/weather?q='+ inputCity +'&appid='+ key + '&units=imperial';
  fetchFutureWeather();//bottom 5 day forcast weather
  fetchCurrentWeather();//current weather
  // storeLocalStorage();
});

// Event listener for clear city history
$("#clear-history").on("click", function (event) {
  $("#historyList").empty();
});

//call to fetch current data for that city
function fetchCurrentWeather() {
fetch(urlCurrent)
  .then(function (response) {
    return response.json()
  })
  .then(function(response) {
console.log(response);
    cityName = $('#cityInput').val();
    let nameChange=$('#cityName')
    nameChange.text(cityName.toUpperCase())

    let iconImg = $('#local-icon')
    cityIcon = response.weather[0].icon
    iconImg.attr('src', 'https://openweathermap.org/img/wn/'+cityIcon+'.png')
    console.log(iconImg);
   
    
    let temp = $('#temperature')
    cityTemp = response.main.temp
    temp.text('Temperature: ' + cityTemp + 'F')

    let humidity=$('#humidity')
    hum = response.main.humidity
    humidity.text('Humidity: '+ hum +'g/kg')

    let wind = $('#windSpeed')
    air = response.wind.speed
    wind.text("Wind Speed: "+ air +'mph')
  })

};

// Fetches future forecast data
function fetchFutureWeather() {
  fetch(urlForecast)
    .then(function (response) {
      return response.json()
    })
    .then(function(data) {
    console.log(data);

//Forecast day 1 
    let icon1Img = $('.card-img-top1')
    icon1 = data.list[0].weather[0].icon
    console.log(icon1);
    icon1Img.attr('src', 'https://openweathermap.org/img/wn/'+icon1+'.png')
    console.log(icon1Img);
   
    let temp1 = $('#temp1')
    tempData1 = data.list[0].main.temp
    temp1.text('Temperature: ' + tempData1 + 'F')

    let wind1 = $('#wind1')
    windData1 = data.list[0].wind.speed
    wind1.text("Wind Speed: "+ windData1 +'mph')

    let hum1 = $('#hum1')
    humData1 = data.list[0].main.humidity
    hum1.text("Wind Speed: "+ humData1 +'g/kg')

//Forecast day 2
    let icon2Img = $('.card-img-top2')
    icon2 = data.list[8].weather[0].icon
    console.log(icon2);
    icon2Img.attr('src', 'https://openweathermap.org/img/wn/'+icon2+'.png')
    console.log(icon1Img);
   
    let temp2 = $('#temp2')
    tempData2 = data.list[8].main.temp
    temp2.text('Temperature: ' + tempData2 + 'F')

    let wind2 = $('#wind2')
    windData2 = data.list[8].wind.speed
    wind2.text("Wind Speed: "+ windData2 +'mph')

    let hum2 = $('#hum2')
    humData2 = data.list[8].main.humidity
    hum2.text("Wind Speed: "+ humData2 +'g/kg')

//Forecast day 3
    let icon3Img = $('.card-img-top3')
    icon3 = data.list[16].weather[0].icon
    console.log(icon3);
    icon3Img.attr('src', 'https://openweathermap.org/img/wn/'+icon3+'.png')
    console.log(icon3Img);
   
    let temp3 = $('#temp3')
    tempData3 = data.list[16].main.temp
    temp3.text('Temperature: ' + tempData3 + 'F')

    let wind3 = $('#wind3')
    windData3 = data.list[16].wind.speed
    wind3.text("Wind Speed: "+ windData3 +'mph')

    let hum3 = $('#hum3')
    humData3 = data.list[16].main.humidity
    hum3.text("Wind Speed: "+ humData3 +'g/kg')
  
    //Forecast day 4
    let icon4Img = $('.card-img-top4')
    icon4 = data.list[24].weather[0].icon
    console.log(icon4);
    icon4Img.attr('src', 'https://openweathermap.org/img/wn/'+icon4+'.png')
    console.log(icon4Img);
   
    let temp4 = $('#temp4')
    tempData4 = data.list[24].main.temp
    temp4.text('Temperature: ' + tempData4 + 'F')

    let wind4 = $('#wind4')
    windData4 = data.list[24].wind.speed
    wind4.text("Wind Speed: "+ windData4 +'mph')

    let hum4 = $('#hum4')
    humData4 = data.list[24].main.humidity
    hum4.text("Wind Speed: "+ humData4 +'g/kg')

    //Forecast day 5
    let icon5Img = $('.card-img-top5')
    icon5 = data.list[32].weather[0].icon
    console.log(icon5);
    icon5Img.attr('src', 'https://openweathermap.org/img/wn/'+icon5+'.png')
    console.log(icon5Img);
   
    let temp5 = $('#temp5')
    tempData5 = data.list[32].main.temp
    temp5.text('Temperature: ' + tempData5 + 'F')

    let wind5 = $('#wind5')
    windData5 = data.list[32].wind.speed
    wind5.text("Wind Speed: "+ windData5 +'mph')

    let hum5 = $('#hum5')
    humData5 = data.list[32].main.humidity
    hum5.text("Wind Speed: "+ humData5 +'g/kg')
  })
    
};

//Set Dates 
$(function () {
  const day = dayjs().format('MM/DD/YY');
  const currentDate = $('#date');
  currentDate.text('Date: ' + day)
  // let now =parseInt(dayjs().format('MDYY'));
  
  let now = dayjs();
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

// function storeLocalStorage(){  
// citiesSearched = $('.list-group');
// citiesStored =  $(JSON.parse(localStorage.getItem('saved'))); 

// for (var i =0 ; i < citiesSearched.length; i++){
//   ul = document.createElement('ul');
//   ul.textContent = citiesSearched[i];
//   ul.setAttribute('ul', 'city-names')
// }

// citiesSearched.push($("#cityInput").value);
// localStorage.setItem('gloves', JSON.stringify(citiesStored));
// storeLocalStorage(); 

// }
// //added clear histor fuction to clear searched city list
// $("#clear-history").on("click", function (event) {
//     $("#ul").empty();
// });





