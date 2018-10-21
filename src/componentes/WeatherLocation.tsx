import * as React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

const WeatherLocation = () => (
    <div>
        <Location city={"Málaga"}></Location>
        <WeatherData></WeatherData>
    </div>
);

export default WeatherLocation;