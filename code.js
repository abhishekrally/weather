const BASE_URL = "https://api.weatherapi.com/v1/current.json?key=28b1a6dd3d334383a56172726250101&q=";

// Select DOM elements
const temp = document.querySelector(".temperature");
const description = document.querySelector(".description");
const img = document.querySelector(".weather-icon");
const wspeed = document.querySelector("#wspeed");
const wdirection = document.querySelector("#wdirection");
const humidity = document.querySelector("#Humidity");
const uvindex = document.querySelector("#uv");
const pressure = document.querySelector("#pressure");
const tempFeel = document.querySelector("#temp-feel");
const cloudCover = document.querySelector("#Cloud-cover");
const city = document.querySelector(".city");
const date = document.querySelector("#date");
const time = document.querySelector("#time");

// Search input and button
const searchBox = document.querySelector(".search-box");
const searchBtn = document.querySelector(".search-btn");

// Function to fetch and update weather data
const fetchWeather = async (location) => {
    try {
        const URL = `${BASE_URL}${location}`;
        const response = await fetch(URL);
        const data = await response.json();

        // Update weather details
        temp.textContent = `${data.current.temp_c}°C`;
        description.textContent = data.current.condition.text;
        img.src = data.current.condition.icon;
        img.alt = data.current.condition.text;
        wspeed.textContent = `${data.current.wind_kph} km/h`;
        wdirection.textContent = data.current.wind_dir;
        humidity.textContent = `${data.current.humidity}%`;
        uvindex.textContent = data.current.uv;
        pressure.textContent = `${data.current.pressure_mb} mb`;
        tempFeel.textContent = `${data.current.feelslike_c}°C`;
        cloudCover.textContent = `${data.current.cloud}%`;
        city.textContent = data.location.name;

        // Update date and time
        const localTime = new Date(data.location.localtime);
        date.textContent = localTime.toLocaleDateString();
        time.textContent = localTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Unable to fetch weather data. Please check the location name.");
    }
};

// Event listener for the search button
searchBtn.addEventListener("click", () => {
    const location = searchBox.value.trim();
    if (location) {
        fetchWeather(location);
    } else {
        alert("Please enter a location.");
    }
});

// Load default location on window load
window.onload = () => {
    fetchWeather("amritsar");
};
