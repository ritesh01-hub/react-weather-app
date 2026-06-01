import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function WeatherWidget({ info }) {
  return (
    <Card sx={{ maxWidth: 345, margin: "20px auto" }}>
      <CardContent>
        <Typography variant="h5">{info.city}</Typography>
        <Typography>🌡 Temp: {info.temp}°C</Typography>
        <Typography>🔥 Feels Like: {info.feelsLike}°C</Typography>
        <Typography>⬇ Min: {info.tempMin}°C | ⬆ Max: {info.tempMax}°C</Typography>
        <Typography>💧 Humidity: {info.humidity}%</Typography>
        <Typography>☁ {info.weather}</Typography>
      </CardContent>
    </Card>
  );
}