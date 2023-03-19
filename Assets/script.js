fetch ('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}')
.then(res =>res.json())
.then(function (data) {
    //   this data will have the latitude and longitude
    fetch(`/getStuffApi?lat=${data.lat}&long=${data.long}`)
      .then(res => res.json())
      .then(function (data) {
        //   the data here would have our map data from a specific location
      })
  })

  fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
