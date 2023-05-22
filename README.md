# Weather App Documentation

## Introduction
The Weather App is a web application that allows users to get weather information for a specific location. It fetches weather data from an external API and displays it in a user-friendly interface. This documentation provides an overview of the Weather App, including its features, installation instructions, usage guidelines, and contribution guidelines.

## Table of Contents
1. Features
2. Installation
   - Prerequisites
    - Setup
3. Usage
4. Contributing
## Features
- Current weather information, including temperature, humidity, wind speed, and weather condition.
- 24-hours weather forecast, with daily temperature highs and lows.
- Search functionality to find weather information for a specific location.
- Responsive design for optimal user experience on different devices.
## Installation
### Prerequisites
- Node.js (version 12 or higher)
- npm (Node package manager)
### Setup
1. Clone the repository:

shell
```
git clone https://github.com/loarden/weather-app.git
```
2. Navigate to the project directory:

shell
```
cd weather-app
```
3. Install the project dependencies using npm:

shell
```
npm install
```
4. Obtain an API key from a weather data provider (e.g., OpenWeatherMap).

5. Create a .env file in the project's root directory and add the following line, replacing <API_KEY> with your actual API key:

plantext
```
REACT_APP_API_KEY=<API_KEY>
```
6. Start the development server:

shell
```
npm start
```
7. Open a web browser and navigate to http://localhost:3000 to access the Weather App.

## Usage
1. Upon opening the Weather App, you will be presented with the current weather information for Budapest.

2. To search for weather information for a specific location, enter the location in the search bar and press Enter or click the search button.

3. The app will display the current weather information and a 24-hour weather forecast for the searched location.
