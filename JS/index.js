
const key = '9419bab730ba4aea8de124511252506'


async function getWeatherData( apiKey , location ) {
    try {
        
        if (location.length < 3) { throw error }
        

        let url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${encodeURIComponent(location)}&days=4`;
              
        const response = await fetch(url).catch(error=>console.log(error));
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        var data = await response.json()

        return data
        
    } catch (error) {
        error.message = "No matching location found."
        throw error
    }
}





async function getData (data) {
    
    
    
    const todayData = {
        city : data.location.name ,
        temp: data.current.temp_c,           
        text: data.current.condition.text, 
        icon: `https:${data.current.condition.icon}` , 
        windSpeed : data.current.wind_kph ,
        windDir : data.current.wind_dir , 
        humidty : data.current.humidity
    }

    const tomorrowData = {
        maxTemp: data.forecast.forecastday[1].day.maxtemp_c,  
        minTemp: data.forecast.forecastday[1].day.mintemp_c,  
        text: data.forecast.forecastday[1].day.condition.text, 
        icon: `https:${data.forecast.forecastday[1].day.condition.icon}` 
    }

    const afterTomorrowData = {
        maxTemp: data.forecast.forecastday[2].day.maxtemp_c,  
        minTemp: data.forecast.forecastday[2].day.mintemp_c,  
        text: data.forecast.forecastday[2].day.condition.text, 
        icon: `https:${data.forecast.forecastday[2].day.condition.icon}` 
    }

    let displayArr = [ todayData , tomorrowData , afterTomorrowData ]


    return displayArr
}


function displayData( input ) {
    

    let inner = `
                <div class="col-12 col-lg-4 p-0" style="background-color: #323544;">
                    <div class="inner" >
                        <div class="d-flex justify-content-between p-2" style="background-color: #2D303D;">
                            <span>wenesday</span>
                            <span>26june</span>
                        </div>

                        <div class="d-flex flex-column p-3">
                            <span class="fs-4 ">${input[0].city}</span>
                            <span class=" text-white mb-3" style="font-size: 6rem;">${input[0].temp} C <img src="${input[0].icon}" alt=""></span>
                            <span class="text-info">${input[0].text}</span>
                        </div>

                        <div class="d-flex gap-4  pb-3 px-3" >
                            <span><i class="me-1 fa-solid fa-umbrella"></i>${input[0].humidty}</span>
                            <span><i class="me-1 fa-solid fa-umbrella"></i>${input[0].windSpeed}</span>
                            <span><i class="me-1 fa-solid fa-umbrella"></i>${input[0].windDir}</span>
                        </div>
                    </div>
                </div>


                <div class=" col-12 col-xl-4 p-0" style="background-color: #262936;">
                    <div class="inner " >
                        <div class="d-flex justify-content-center p-2" style="background-color: #222530;">
                            <span>thursday</span>
                        </div>

                        <div class="d-flex flex-column align-items-center" >
                            <span class="my-5"><img src="${input[1].icon}" alt=""></span>
                            <span class="fs-4 text-white">${input[1].maxTemp} C</span>
                            <span>${input[1].minTemp} c</span>
                            <span class="my-3 text-info">${input[1].text}</span>
                        </div>
                    </div>
                </div>           

                <div class=" col-12 col-xl-4 p-0" style="background-color: #323544;">
                    <div class="inner">
 
                        <div class="d-flex justify-content-center p-2" style="background-color: #2D303D;">
                            <span>friday</span>
                        </div>

                        <div class="d-flex flex-column align-items-center">
                            <span class="my-5"><img src="${input[2].icon}" alt=""></span>
                            <span class="fs-4 text-white">${input[2].maxTemp} C</span>
                            <span>${input[2].minTemp} c</span>
                            <span class="my-3 text-info">${input[2].text}</span>
                        </div>
                    </div>
                </div>  
    `


    document.getElementById('weatherCards').innerHTML = inner
}







let getPosition = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition( 
            async (output) => {
                try {
                    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${output.coords.latitude}&lon=${output.coords.longitude}`);
                    const data = await response.json();
                    resolve(data.address.city); 
                } catch (error) {
                    reject(error);
                }
            }
     )
})





// execution stack 



var search = document.getElementById('searchInput')


// current location weather
getPosition
    .then( location => getWeatherData( key , location))
    .then(data => getData(data))
    .then(data => displayData(data))
    .catch(error=>console.log(error))
// 


// search location weather
search.addEventListener('input', () => {

    getWeatherData( key , search.value)
        .then(data => getData(data))
        .then(data => displayData(data))
        .catch(error=>console.log(error))

})








