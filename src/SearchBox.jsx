import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({ onWeatherUpdate }) {
    const [city, setCity] = useState("");
    const [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            if (!response.ok) throw new Error("City not found");

            let data = await response.json();
            let result = {
                city: data.name,
                temp: data.main.temp,
                tempMin: data.main.temp_min,
                tempMax: data.main.temp_max,
                humidity: data.main.humidity,
                feelsLike: data.main.feels_like,
                weather: data.weather[0].description,
            };
            setError(false);
            onWeatherUpdate(result);
        } catch (err) {
            setError(true);
        }
    };

    let handleChange = (e) => setCity(e.target.value);

    let handleSubmit = async (e) => {
        e.preventDefault();
        await getWeatherInfo();
        setCity("");
    };

    return (
        <div className='searchBox'>
            <h3>Search for the weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="City"
                    label="City Name"
                    variant="outlined"
                    value={city}
                    onChange={handleChange}
                    required
                />
                <br /><br />
                {error && <p style={{ color: "red" }}>City not found. Please try again!</p>}
                <Button variant="contained" type='submit'>Search</Button>
            </form>
        </div>
    );
}