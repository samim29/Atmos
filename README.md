# Atmos

Atmos is a simple, modern weather forecast web app. Enter a city name to get current weather details, or allow location access to see your local weather by default.

## Features
- Search weather by city name
- Auto-detect and show weather for your location (using browser geolocation)
- Responsive, Google-style search bar
- Weather details: temperature, description, humidity, wind speed
- Attractive card-based UI with icons
- Graceful fallback to default city (Kolkata) if location access is denied

## Technologies Used
- HTML5 & CSS3 (modern, responsive design)
- JavaScript (fetches data from OpenWeatherMap API)
- Font Awesome for icons

## How It Works
1. On page load, the app requests your location. If allowed, it shows your local weather. If denied, it shows Kolkata's weather.
2. You can search for any city using the search bar. Press Enter or click the search icon.
3. Weather data is displayed in a styled card, including temperature, description, humidity, and wind speed.

## Setup & Usage
1. Clone or download this repository.
2. Add your OpenWeatherMap API key in `script.js` (replace the value of `apikey`).
3. (Optional) Place humidity and wind icon images in an `Assets` folder.
4. Open `index.html` in your browser.

## File Structure
- `index.html` — Main HTML file
- `style.css` — App styling
- `script.js` — Weather app logic
- `Assets/` — (Optional) Icon images for humidity and wind

## Notes
- API keys should not be exposed in public repositories. For production, use a backend to keep keys secure.
- The app uses browser geolocation; users may need to allow location access.

---
© 2025 Atmos Weather App