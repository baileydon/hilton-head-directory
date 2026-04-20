# 📦 MANUS - COMPLETE DEPLOYMENT PACKAGE
## Copy this entire document and save as: `DEPLOYMENT_PACKAGE.md`

---

## 🗂️ FILE STRUCTURE TO CREATE

```
hiltonhead-weather-directory/
├── index.html                 (Main weather homepage)
├── assets/
│   ├── weather-api.js         (Weather API handler)
│   ├── analytics.js           (Analytics tracking)
│   └── styles.css             (Additional styling)
├── config/
│   └── settings.js            (Configuration file)
└── README.md                  (Setup instructions)
```

---

## 📄 FILE 1: index.html
**Save this as your main homepage:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hilton Head Directory - Weather-Smart Business Discovery</title>
    
    <style>
        /* COMPLETE CSS - Copy from previous artifact */
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
        
        .weather-alert-bar {
            background: linear-gradient(45deg, #FF6B6B, #FFE66D);
            color: #333; padding: 12px 20px; text-align: center; font-weight: bold;
            animation: slideDown 0.5s ease-out; position: sticky; top: 0; z-index: 1001;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2); cursor: pointer;
        }
        
        @keyframes slideDown {
            from { transform: translateY(-100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        
        .weather-hero-section {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white; padding: 80px 20px; text-align: center; position: relative;
            min-height: 80vh; display: flex; align-items: center; justify-content: center;
            overflow: hidden;
        }
        
        .hero-container { max-width: 1200px; width: 100%; position: relative; z-index: 2; }
        
        .main-headline {
            font-size: 4em; font-weight: 900; margin-bottom: 25px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3); line-height: 1.1; letter-spacing: -0.02em;
        }
        
        .sub-headline {
            font-size: 1.5em; margin-bottom: 50px; opacity: 0.95;
            max-width: 700px; margin-left: auto; margin-right: auto; font-weight: 300;
        }
        
        .live-weather-preview {
            background: rgba(255,255,255,0.15); backdrop-filter: blur(15px);
            border-radius: 25px; padding: 40px 30px; margin: 50px auto; max-width: 1000px;
            border: 1px solid rgba(255,255,255,0.2); box-shadow: 0 8px 32px rgba(0,0,0,0.1);
        }
        
        .weather-grid {
            display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 25px; margin-bottom: 25px;
        }
        
        .weather-card {
            text-align: center; padding: 25px 20px; background: rgba(255,255,255,0.1);
            border-radius: 20px; border: 1px solid rgba(255,255,255,0.2);
            transition: transform 0.3s ease, background 0.3s ease;
        }
        
        .weather-card:hover { transform: translateY(-5px); background: rgba(255,255,255,0.15); }
        
        .weather-value {
            font-size: 2.5em; font-weight: 800; display: block; color: #FFE66D;
            margin-bottom: 10px; text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
        }
        
        .weather-label {
            font-size: 1em; opacity: 0.9; text-transform: uppercase;
            letter-spacing: 1.5px; font-weight: 500;
        }
        
        .live-indicator {
            display: inline-block; width: 10px; height: 10px; background: #00ff88;
            border-radius: 50%; animation: pulse 2s infinite; margin-right: 8px;
            box-shadow: 0 0 10px rgba(0,255,136,0.5);
        }
        
        @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.2); }
        }
        
        .cta-container {
            margin-top: 50px; display: flex; gap: 25px; justify-content: center; flex-wrap: wrap;
        }
        
        .btn-primary {
            background: linear-gradient(135deg, #FF6B6B, #ee5a52); color: white;
            padding: 20px 40px; border: none; border-radius: 50px; font-size: 1.2em;
            font-weight: 700; cursor: pointer; text-decoration: none;
            display: inline-flex; align-items: center; gap: 12px;
            transition: all 0.3s ease; box-shadow: 0 6px 25px rgba(255,107,107,0.3);
            text-transform: uppercase; letter-spacing: 1px;
        }
        
        .btn-primary:hover {
            transform: translateY(-4px); box-shadow: 0 8px 30px rgba(255,107,107,0.4);
            background: linear-gradient(135deg, #ff5252, #e53935);
        }
        
        .btn-secondary {
            background: transparent; color: white; padding: 20px 40px;
            border: 2px solid rgba(255,255,255,0.8); border-radius: 50px;
            font-size: 1.2em; font-weight: 700; cursor: pointer; text-decoration: none;
            display: inline-flex; align-items: center; gap: 12px; transition: all 0.3s ease;
            text-transform: uppercase; letter-spacing: 1px;
        }
        
        .btn-secondary:hover {
            background: rgba(255,255,255,0.2); border-color: white;
            transform: translateY(-3px); backdrop-filter: blur(10px);
        }
        
        .value-section {
            background: linear-gradient(135deg, #f8f9ff 0%, #e8eaff 100%);
            padding: 100px 20px;
        }
        
        .value-container { max-width: 1200px; margin: 0 auto; text-align: center; }
        
        .section-title {
            font-size: 3em; color: #333; margin-bottom: 25px; font-weight: 800;
        }
        
        .section-subtitle {
            font-size: 1.3em; color: #666; max-width: 700px;
            margin: 0 auto 60px; line-height: 1.6;
        }
        
        .value-grid {
            display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 50px; margin-top: 60px;
        }
        
        .value-card {
            background: white; padding: 50px 40px; border-radius: 25px; text-align: center;
            box-shadow: 0 15px 40px rgba(0,0,0,0.08); transition: all 0.3s ease;
            border: 1px solid rgba(102,126,234,0.1);
        }
        
        .value-card:hover {
            transform: translateY(-8px); box-shadow: 0 25px 60px rgba(0,0,0,0.12);
            border-color: rgba(102,126,234,0.2);
        }
        
        .value-icon {
            font-size: 5em; margin-bottom: 25px; display: block;
            filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
        }
        
        .value-title {
            font-size: 1.8em; font-weight: 700; margin-bottom: 20px; color: #333;
        }
        
        .value-description { color: #666; line-height: 1.7; font-size: 1.1em; }
        
        .floating-weather-widget {
            position: fixed; bottom: 25px; right: 25px;
            background: linear-gradient(135deg, rgba(102, 126, 234, 0.95), rgba(118, 75, 162, 0.95));
            color: white; padding: 18px 20px; border-radius: 50px; z-index: 1000;
            box-shadow: 0 6px 25px rgba(0,0,0,0.3); cursor: pointer;
            transition: all 0.3s ease; backdrop-filter: blur(15px);
            border: 1px solid rgba(255,255,255,0.2);
        }
        
        .floating-weather-widget:hover {
            transform: scale(1.05);
            background: linear-gradient(135deg, rgba(102, 126, 234, 1), rgba(118, 75, 162, 1));
            box-shadow: 0 8px 35px rgba(0,0,0,0.4);
        }
        
        @media (max-width: 768px) {
            .weather-hero-section { padding: 60px 15px; min-height: 70vh; }
            .main-headline { font-size: 2.5em; line-height: 1.2; margin-bottom: 20px; }
            .sub-headline { font-size: 1.2em; margin-bottom: 40px; }
            .weather-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
            .live-weather-preview { padding: 25px 20px; margin: 40px 15px; }
            .cta-container { flex-direction: column; align-items: center; gap: 20px; }
            .btn-primary, .btn-secondary { 
                width: 100%; max-width: 300px; justify-content: center;
                padding: 18px 30px; font-size: 1.1em;
            }
            .section-title { font-size: 2.2em; }
            .value-grid { grid-template-columns: 1fr; gap: 30px; }
            .value-card { padding: 40px 30px; }
        }
        
        @media (min-width: 769px) { .floating-weather-widget { display: none; } }
        
        .hidden { display: none !important; }
    </style>
</head>
<body>
    <!-- Weather Alert Bar -->
    <div id="weatherAlertBar" class="weather-alert-bar hidden">
        <span class="live-indicator"></span>
        <span id="alertMessage">🌧️ LIVE ALERT: Weather update available</span>
    </div>

    <!-- Main Hero Section -->
    <section class="weather-hero-section">
        <div class="hero-container">
            <h1 class="main-headline">
                Hilton Head's First<br>
                <span style="color: #FFE66D;">Weather-Smart</span> Directory
            </h1>
            <p class="sub-headline">
                Find the perfect business for RIGHT NOW conditions.<br>
                Real-time weather + traffic + local intelligence = smarter decisions.
            </p>
            
            <!-- Live Weather Dashboard -->
            <div class="live-weather-preview">
                <div style="margin-bottom: 30px; display: flex; align-items: center; justify-content: center; gap: 12px; font-size: 1.1em; font-weight: 600;">
                    <span class="live-indicator"></span>
                    <strong>LIVE CONDITIONS • UPDATED EVERY 5 MINUTES</strong>
                </div>
                
                <div class="weather-grid">
                    <div class="weather-card">
                        <span class="weather-value" id="liveTemp">78°F</span>
                        <div class="weather-label">Temperature</div>
                    </div>
                    <div class="weather-card">
                        <span class="weather-value" id="liveWind">12 mph</span>
                        <div class="weather-label">Wind Speed</div>
                    </div>
                    <div class="weather-card">
                        <span class="weather-value" id="liveTraffic">🟢 Clear</span>
                        <div class="weather-label">Bridge Traffic</div>
                    </div>
                    <div class="weather-card">
                        <span class="weather-value" id="livePerfectFor">⛳ Golf</span>
                        <div class="weather-label">Perfect For</div>
                    </div>
                </div>
                
                <div style="font-size: 0.9em; opacity: 0.8; margin-top: 20px; display: flex; align-items: center; justify-content: center; gap: 8px;">
                    <span class="live-indicator"></span>
                    Last updated: <span id="lastUpdated">Just now</span>
                </div>
            </div>
            
            <!-- CTA Buttons -->
            <div class="cta-container">
                <a href="/live-weather-central" class="btn-primary" id="weatherDashboardBtn">
                    🌤️ Full Weather Dashboard
                </a>
                <a href="/weather-smart-search" class="btn-secondary" id="smartSearchBtn">
                    🎯 Find Weather-Perfect Businesses
                </a>
            </div>
        </div>
    </section>

    <!-- Value Propositions -->
    <section class="value-section">
        <div class="value-container">
            <h2 class="section-title">Why Choose Weather-Smart Discovery?</h2>
            <p class="section-subtitle">
                Stop wasting time on weather-ruined plans. Our intelligence keeps you ahead of conditions.
            </p>
            
            <div class="value-grid">
                <div class="value-card">
                    <span class="value-icon">🌦️</span>
                    <h3 class="value-title">Real-Time Weather Intelligence</h3>
                    <p class="value-description">
                        5-minute updates from hyperlocal weather stations. Never drive to a closed business again.
                    </p>
                </div>
                <div class="value-card">
                    <span class="value-icon">🚗</span>
                    <h3 class="value-title">Live Traffic & Bridge Monitoring</h3>
                    <p class="value-description">
                        Real-time bridge cameras and traffic updates. Plan the perfect route before you leave.
                    </p>
                </div>
                <div class="value-card">
                    <span class="value-icon">🎯</span>
                    <h3 class="value-title">AI-Powered Recommendations</h3>
                    <p class="value-description">
                        Smart suggestions: indoor dining when raining, beach bars when perfect outside.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Mobile Widget -->
    <div class="floating-weather-widget" id="floatingWidget">
        <div style="display: flex; align-items: center; gap: 15px;">
            <div>
                <div style="font-size: 1.4em; font-weight: 800;" id="widgetTemp">78°</div>
                <div style="font-size: 0.9em; opacity: 0.9;" id="widgetCondition">Sunny</div>
            </div>
            <div style="font-size: 1.2em;">🌤️</div>
        </div>
    </div>

    <!-- JavaScript -->
    <script src="assets/weather-api.js"></script>
    <script src="assets/analytics.js"></script>
    <script>
        // Initialize when page loads
        document.addEventListener('DOMContentLoaded', function() {
            window.weatherManager = new HiltonHeadWeatherManager();
        });
    </script>
</body>
</html>
```

---

## 📄 FILE 2: assets/weather-api.js
**Create this file for weather functionality:**

```javascript
class HiltonHeadWeatherManager {
    constructor() {
        // MANUS: Get API key from https://openweathermap.org/api
        this.apiKey = 'YOUR_WEATHER_API_KEY_HERE';
        this.lat = 32.2163;
        this.lon = -80.7526;
        this.lastUpdate = null;
        this.updateInterval = 5 * 60 * 1000; // 5 minutes
        this.init();
    }
    
    init() {
        console.log('🌤️ Weather Manager Starting...');
        this.fetchWeatherData();
        this.startUpdateTimer();
        this.setupEventListeners();
    }
    
    async fetchWeatherData() {
        try {
            if (this.apiKey === 'YOUR_WEATHER_API_KEY_HERE') {
                this.simulateWeatherData();
                return;
            }
            
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=${this.apiKey}&units=imperial`;
            const response = await fetch(url);
            const data = await response.json();
            
            this.updateWeatherDisplay({
                temp: Math.round(data.main.temp),
                condition: data.weather[0].main,
                wind: Math.round(data.wind.speed),
                traffic: this.generateTrafficStatus(),
                activity: this.generateActivity(data.main.temp, data.weather[0].main)
            });
            
        } catch (error) {
            console.warn('Weather API failed, using demo data');
            this.simulateWeatherData();
        }
    }
    
    simulateWeatherData() {
        const conditions = ['Clear', 'Sunny', 'Partly Cloudy'];
        const activities = ['⛳ Golf', '🏖️ Beach', '🍽️ Dining', '🎣 Fishing'];
        const traffic = ['🟢 Clear', '🟡 Light', '🟢 Clear'];
        
        this.updateWeatherDisplay({
            temp: Math.floor(Math.random() * 15) + 70,
            condition: conditions[Math.floor(Math.random() * conditions.length)],
            wind: Math.floor(Math.random() * 10) + 5,
            traffic: traffic[Math.floor(Math.random() * traffic.length)],
            activity: acti