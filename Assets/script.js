// function getWeather(){
//     const cityName = document.getElementById('city_name')

//     if (!cityName){
//         return;
//     }
// }
function fetchWeather(){
    const cityName =document.getElementById('cityName');
    const newCity = document.getElementById('cityInput');
    cityName.innerHTML='--'+newCity.value+'--'
    var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=&appid=dffa84ce1822c1184cd63ec1b24553c1'

    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      //Loop over the data to generate a table, each table row will have a link to the repo url
     
    });
}

let searchBtn = document.getElementById('btnGet');
searchBtn.addEventListener('click',fetchWeather )