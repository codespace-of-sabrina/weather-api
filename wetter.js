
document.getElementById('wetterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const ort = document.getElementById('ort').value;
    const apiKey = ''; // Insert API-Key here!
    // get API-Key at: https://openweathermap.org/price
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ort}&appid=${apiKey}&units=metric&lang=de`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data); // show API-response
        if (data.cod === 200) {
            // successful API-response
            const temperatur = data.main.temp;
            const wetterKondition = data.weather[0].description;
            document.getElementById('wetterErgebnis').innerHTML = `
                <h2>Wetter in ${data.name}</h2>
                <p>Temperatur: ${temperatur}°C</p>
                <p>Bedingung: ${wetterKondition}</p>
            `;
        } else {
            document.getElementById('wetterErgebnis').innerHTML = `
                <p>Ort nicht gefunden. Bitte versuchen Sie es erneut.</p>
            `;
        }
        // Wetterergebnis sichtbar machen
        document.getElementById('wetterErgebnis').style.display = 'block';
    })
    .catch(error => {
        document.getElementById('wetterErgebnis').innerHTML = `
            <p>Fehler beim Abrufen der Wetterdaten. Bitte versuchen Sie es später erneut.</p>
        `;
        console.error('Error:', error);
        // Wetterergebnis sichtbar machen
         document.getElementById('wetterErgebnis').style.display = 'block';
    });
});