const apikey="Api Key Goes Here";
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("search");
const forecastContainer = document.getElementById("forecast-container"); // make sure id matches HTML

// Fetch weather by city name
async function getForecast(city) {
    if (!city) {
        forecastContainer.innerHTML = `
            <div class="weather-card">
                <h3>Error</h3>
                <div class="desc">Please enter a city name.</div>
            </div>`;
        return;
    }

    forecastContainer.innerHTML = `
        <div class="weather-card">
            <div class="desc">Loading...</div>
        </div>`;

    try {
        const response = await fetch(
            `${apiUrl}?q=${encodeURIComponent(city)}&units=metric&appid=${apikey}`
        );

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();
        renderWeather(data);
    } catch (error) {
        forecastContainer.innerHTML = `
            <div class="weather-card">
                <h3>Error</h3>
                <div class="desc">${error.message}</div>
            </div>`;
    }
}

// Fetch weather using coordinates (default load)
async function getForecastByCoords(lat, lon) {
    try {
        const response = await fetch(
            `${apiUrl}?lat=${lat}&lon=${lon}&units=metric&appid=${apikey}`
        );
        const data = await response.json();
        renderWeather(data);
    } catch (error) {
        forecastContainer.innerHTML = `
            <div class="weather-card">
                <h3>Error</h3>
                <div class="desc">${error.message}</div>
            </div>`;
    }
}

// Render weather data to UI
function renderWeather(data) {
    const weatherHtml = `
        <div class="weather-card">
            <h3>${data.name}, ${data.sys.country}</h3>
            <div class="temp">${Math.round(data.main.temp)}°C</div>

            <div class="desc">
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" 
                     alt="Weather icon" />
                ${data.weather[0].description}
            </div>

            <div class="details">
                <div class="humidity">
                    <img src="./Assets/humidity.png" alt="Humidity icon">
                    <span>Humidity: ${data.main.humidity}%</span>
                </div>

                <div class="wind-speed">
                    <img src="./Assets/wind.png" alt="Wind icon">
                    <span>Wind: ${data.wind.speed} m/s</span>
                </div>
            </div>
        </div>
    `;
    forecastContainer.innerHTML = weatherHtml;
}

// Default location weather on load
navigator.geolocation.getCurrentPosition(success, geoError);

function success(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    getForecastByCoords(lat, lon);
}

function geoError(error) {
    getForecast("kolkata");
}

// Event listeners
searchBtn.addEventListener("click", () => {
    const city = searchInput.value.trim();
    searchInput.value = "";
    getForecast(city);
});

searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const city = searchInput.value.trim();
        searchInput.value = "";
        getForecast(city);
    }
});
