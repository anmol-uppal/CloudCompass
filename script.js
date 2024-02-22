// const fetchData = async () => {
//     const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
//     const options = {
//       method: 'GET',
//       headers: {
//         'X-RapidAPI-Key': 'b09de8447bmsh1c6a859260b975ep1b3af6jsn411425025cec',
//         'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
//       }
//     };
  
//     try {
//       const response = await fetch(url, options);
//       const result = await response.text();
//       console.log(result);
//     } catch (error) {
    //       console.error(error);
    //     }
    //   };
    
    //   // Call the asynchronous function
    //   fetchData();


//     const getWeather=(city)=>{
// const fetchData = async () => {
//     cityName.innerHTML=city
//     const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
//     const options = {
//       method: 'GET',
//       headers: {
//         'X-RapidAPI-Key': 'b09de8447bmsh1c6a859260b975ep1b3af6jsn411425025cec',
//         'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
//       }
//     };
  
//     try {
//         const response = await fetch(url, options);
        
//         // Parse the JSON response
//       const data = await response.json();
      
//       // Extract relevant data
//       cloud_pct.innerHTML = data.cloud_pct;
//       temp.innerHTML = data.temp;
//        feels_like.innerHTML = data.feels_like;
//        humidity.innerHTML = data.humidity;
//        min_temp.innerHTML = data.min_temp;
//        max_temp.innerHTML = data.max_temp;
//        wind_speed.innerHTML = data.wind_speed;
//        wind_degrees.innerHTML = data.wind_degrees;
//        sunrise.innerHTML = data.sunrise;
//        sunset.innerHTML = data.sunset;
       
//        // Use the extracted data as needed
//        console.log("Cloud Percentage:", cloud_pct);
//        console.log("Temperature:", temp);
//        console.log("Feels Like:", feels_like);
//        console.log("Humidity:", humidity);
//        console.log("Min Temperature:", min_temp);
//        console.log("Max Temperature:", max_temp);
//        console.log("Wind Speed:", wind_speed);
//        console.log("Wind Degrees:", wind_degrees);
//       console.log("Sunrise:", sunrise);
//       console.log("Sunset:", sunset);
  
//     } catch (error) {
//       console.error(error);
//     }
//   };
  
//   // Call the asynchronous function
//   fetchData();
// }
// submit.addEventListener("Click",(e)=>{
//     e.preventDefault()
//     getWeather(city.value)
// })

// getWeather("Delhi")

 
const cityName = document.getElementById('cityName'); // Assuming you have an element with the id 'cityName'
const cloud_pct = document.getElementById('cloud_pct');
const temp = document.getElementById('temp');
const feels_like = document.getElementById('feels_like');
const humidity = document.getElementById('humidity');
const min_temp = document.getElementById('min_temp');
const max_temp = document.getElementById('max_temp');
const wind_speed = document.getElementById('wind_speed');
const wind_degrees = document.getElementById('wind_degrees');
const sunrise = document.getElementById('sunrise');
const sunset = document.getElementById('sunset');

const getWeather = async (city) => {
  cityName.innerHTML = city; // Update city name here

  const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b09de8447bmsh1c6a859260b975ep1b3af6jsn411425025cec',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    // Extract relevant data
    cloud_pct.innerHTML = data.cloud_pct;
    temp.innerHTML = data.temp;
    feels_like.innerHTML = data.feels_like;
    humidity.innerHTML = data.humidity;
    min_temp.innerHTML = data.min_temp;
    max_temp.innerHTML = data.max_temp;
    wind_speed.innerHTML = data.wind_speed;
    wind_degrees.innerHTML = data.wind_degrees;
    sunrise.innerHTML = data.sunrise;
    sunset.innerHTML = data.sunset;

    // Use the extracted data as needed
    console.log("Cloud Percentage:", data.cloud_pct);
    console.log("Temperature:", data.temp);
    console.log("Feels Like:", data.feels_like);
    console.log("Humidity:", data.humidity);
    console.log("Min Temperature:", data.min_temp);
    console.log("Max Temperature:", data.max_temp);
    console.log("Wind Speed:", data.wind_speed);
    console.log("Wind Degrees:", data.wind_degrees);
    console.log("Sunrise:", data.sunrise);
    console.log("Sunset:", data.sunset);

  } catch (error) {
    console.error(error);
  }
};

const submit = document.getElementById('submit');

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const cityInput = document.getElementById('city');
  getWeather(cityInput.value);
});

getWeather("Delhi"); // Initial call with a default city (Delhi)
