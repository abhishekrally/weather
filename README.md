# Weather Forecasting App 🌤️

A modern, responsive weather application that provides real-time weather data and forecasts for any city worldwide.

## 🌟 Features

- **Real-time Weather Data**: Get current weather conditions for any city
- **Detailed Weather Insights**: Temperature, humidity, wind speed, and atmospheric pressure
- **Multi-day Forecasts**: Extended weather predictions with dynamic icons
- **Responsive Design**: Optimized for all screen sizes and devices
- **Dynamic Icons**: Visual weather representations that change based on conditions
- **Error Handling**: User-friendly alerts for API failures or invalid searches
- **Clean UI**: Modern interface built with Tailwind CSS

## 🚀 Live Demo

 deployed here:- https://weather-lyart-zeta.vercel.app/

## 🛠️ Technologies Used

- **Frontend**: JavaScript (ES6+), HTML5, Tailwind CSS
- **Framework**: Svelte
- **API Integration**: Weather API for real-time data
- **Design**: Responsive and adaptive UI

## 📱 Screenshots

*Add screenshots of your application here*

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/abhishekrally/weather.git
   cd weather
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Get API Key**
   - Sign up for a weather API service (OpenWeatherMap, WeatherAPI, etc.)
   - Get your API key

4. **Configure API**
   - Create a `.env` file in the root directory
   - Add your API key:
     ```
     VITE_WEATHER_API_KEY=your_api_key_here
     ```

5. **Run the application**
   ```bash
   npm run dev
   ```

6. **Build for production**
   ```bash
   npm run build
   ```

## 📂 Project Structure

```
weather/
├── src/
│   ├── components/
│   ├── utils/
│   ├── styles/
│   ├── App.svelte
│   └── main.js
├── public/
├── package.json
└── README.md
```

## 🌐 API Integration

The application fetches weather data from external APIs to provide:
- Current weather conditions
- Temperature readings
- Humidity levels
- Wind speed and direction
- Multi-day forecasts
- Weather icons and descriptions

## 🎯 Key Features Implementation

### Real-time Data Fetching
- Asynchronous API calls for seamless user experience
- Automatic data refresh capabilities

### Responsive Design
- Mobile-first approach
- Adaptive layouts for different screen sizes
- Touch-friendly interface

### Error Handling
- Network error management
- Invalid city name handling
- API rate limit considerations
- User-friendly error messages

## 🔮 Future Enhancements

- [ ] Geolocation-based weather detection
- [ ] Weather alerts and notifications
- [ ] Favorite cities list
- [ ] Historical weather data
- [ ] Dark/Light theme toggle
- [ ] Weather maps integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👨‍💻 Author

**Abhishek Rally**
- GitHub: [@abhishekrally](https://github.com/abhishekrally)
- 

## 🙏 Acknowledgments

- Weather data provided by [Weather API Service]
- Icons and design inspiration from various sources
- Tailwind CSS for styling framework
- Svelte for the reactive framework

---

⭐ If you found this project helpful, please give it a star!
