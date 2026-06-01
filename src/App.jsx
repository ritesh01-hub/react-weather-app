import { useState } from "react";
import SearchBox from "./SearchBox";
import WeatherWidget from "./WeatherWidget";

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);

  return (
    <>
      <SearchBox onWeatherUpdate={setWeatherInfo} />
      {weatherInfo && <WeatherWidget info={weatherInfo} />}
    </>
  );
}

export default App;