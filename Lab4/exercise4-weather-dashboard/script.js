const cityCoords = {
    delhi: { lat: 28.61, lon: 77.23 },
    mumbai: { lat: 19.07, lon: 72.87 },
    kolkata: { lat: 22.57, lon: 88.36 },
    chennai: { lat: 13.08, lon: 80.27 },
    hyderabad: { lat: 17.38, lon: 78.48 }
};
function getWeather() {
    const cityInput = document.getElementById("city").value.toLowerCase();
    const loading = document.getElementById("loading");
    const result = document.getElementById("weatherResult");

    if (!cityCoords[cityInput]) {
        result.textContent = "City not supported in demo";
        return;
    }

    const { lat, lon } = cityCoords[cityInput];

    loading.textContent = "Fetching weather...";
    result.textContent = "";

    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)
        .then(res => {
            if (!res.ok) throw new Error("HTTP error");
            return res.json();
        })
        .then(data => {
            const temp = data.current_weather.temperature;
            const wind = data.current_weather.windspeed;

            result.innerHTML = `
                Temperature: ${temp}°C <br>
                Wind Speed: ${wind} km/h
            `;
            loading.textContent = "";
        })
        .catch(() => {
            loading.textContent = "";
            result.textContent = "Error fetching weather data";
        });
}
