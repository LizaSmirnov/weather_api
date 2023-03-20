// function getWeather(){
//     const cityName = document.getElementById('city_name')

//     if (!cityName){
//         return;
//     }
// }
function fetchWeather(){
    const cityName =$('#cityName');
    const newCity = $('#cityInput');
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

let searchBtn = $('#btnGet');
searchBtn.on('click',function(event){
  event.preventDefault();
  fetchWeather();
 
  //save content written to local storage
 
  //read time show text
});

//render date for all
//render time for all 

$(function(){
  const day= dayjs().format('MM/DD/YY');
  const currentDate=$('#date');
  currentDate.text('Date: ' + day)
  //all day1-5 is currentdate +1
  let now =dayjs()
  let newDate = now.add('1','day');
  console.log(newDate.$d);

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
})