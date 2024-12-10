document.querySelector('.take-picture').addEventListener('click', function() {
    alert('Picture taken!');
});

document.querySelectorAll('.feature-button').forEach(button => {
    button.addEventListener('click', function() {
        alert('Feature coming soon!');
    });
});

const currentDate = new Date();
      document.getElementById(
        "current-date"
      ).innerHTML = `Today, ${currentDate.getDate()} ${currentDate.toLocaleString(
        "default",
        { month: "long" }
      )}`;

      // Get current weather
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric"
      )
        .then((response) => response.json())
        .then((data) => {
          document.getElementById(
            "current-temp"
          ).innerHTML = `${data.main.temp}°C`;
          document.getElementById(
            "weather-details"
          ).innerHTML = `${data.weather[0].description} · ${data.main.temp_max}°C / ${data.main.temp_min}°C`;
          document.getElementById(
            "weather-icon"
          ).innerHTML = `&#x${data.weather[0].icon};`;
        })
        .catch((error) => console.error("Error:", error));
