# Weather App Documentation

## Introduction
The Weather App is a web application that allows users to get weather information for a specific location. It fetches weather data from an external API and displays it in a user-friendly interface. This documentation provides an overview of the Weather App, including its features, installation instructions, usage guidelines, and contribution guidelines.

## Table of Contents
Features
Installation
Prerequisites
Setup
Usage
Contributing
Bug Reports
Feature Requests
Pull Requests
License
## Features
Current weather information, including temperature, humidity, wind speed, and weather condition.
5-day weather forecast, with daily temperature highs and lows.
Search functionality to find weather information for a specific location.
Geolocation feature to automatically detect and display weather for the user's current location.
Responsive design for optimal user experience on different devices.
## Installation
### Prerequisites
Node.js (version 12 or higher)
npm (Node package manager)
### Setup
Clone the repository:

shell
```
git clone https://github.com/loarden/weather-app.git
```
Navigate to the project directory:

shell
```
cd weather-app
```
Install the project dependencies using npm:

shell
```
npm install
```
Obtain an API key from a weather data provider (e.g., OpenWeatherMap).

Create a .env file in the project's root directory and add the following line, replacing <API_KEY> with your actual API key:

plantext
```
REACT_APP_WEATHER_API_KEY=<API_KEY>
```
Start the development server:

shell
```
npm start
```
Open a web browser and navigate to http://localhost:3000 to access the Weather App.

## Usage
Upon opening the Weather App, you will be presented with the current weather information for your current location if geolocation is enabled in your browser. Otherwise, you will see a search bar.

To search for weather information for a specific location, enter the location in the search bar and press Enter or click the search button.

The app will display the current weather information and a 12-hours weather forecast for the searched location.

## License
The Weather App is open-source software released under the MIT License. You can find the license file in the project repository.
