# 🌤️ React Weather App

A clean, responsive weather search widget built with **React** and **Material UI**, powered by the **OpenWeatherMap API**. Search any city and get real-time weather data instantly.

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat&logo=vite&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-v6-007FFF?style=flat&logo=mui&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green?style=flat)

---

## ✨ Features

- 🔍 **City Search** — Look up weather for any city worldwide
- 🌡️ **Real-time Data** — Temperature, feels like, min/max, and humidity
- 🌫️ **Weather Condition** — Displays current weather description with emoji
- 📱 **Responsive Design** — Works seamlessly on desktop and mobile
- ⚡ **Fast** — Built with Vite for lightning-fast dev and build

---

## 🖼️ Preview

> [!img](https://github.com/ritesh01-hub/react-weather-app/blob/6e3552866fff9a397e1bef101cc76eefcd45276a/Screenshot%202026-06-01%20174022.png)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI Framework |
| Vite | Build Tool |
| Material UI (MUI) v6 | Component Library |
| OpenWeatherMap API | Weather Data |

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- An [OpenWeatherMap API key](https://openweathermap.org/api) (free tier works)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/ritesh01-hub/react-weather-app.git

# 2. Navigate into the project
cd react-weather-app

# 3. Install dependencies
npm install
```

### Environment Setup

Create a `.env` file in the root directory:

```env
VITE_WEATHER_API_KEY=your_openweathermap_api_key_here
```

> ⚠️ Never commit your `.env` file. It's already in `.gitignore`.

### Run Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📁 Project Structure

```
react-weather-app/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── App.jsx           # Root component
│   ├── WeatherWidget.jsx # Parent: fetches weather data
│   ├── SearchBox.jsx     # City search input
│   ├── SearchBox.css
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .env                  # API key (not committed)
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

---

## 🔧 Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

---

## 🌐 API Reference

This app uses the [OpenWeatherMap Current Weather API](https://openweathermap.org/current).

**Endpoint:**
```
GET https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric
```

---

## 📌 Roadmap

- [ ] Loading spinner during API call
- [ ] Weather-based dynamic background
- [ ] 5-day forecast view
- [ ] Geolocation support (auto-detect city)
- [ ] Dark mode toggle

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Ritesh** — [@ritesh01-hub](https://github.com/ritesh01-hub)
