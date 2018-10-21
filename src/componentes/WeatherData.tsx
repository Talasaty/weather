import * as React from 'react';
import ExtraInfo from './ExtraInfo';
import WeatherTemperature from './WeatherTemperature';

const WeatherData = () => (
    <div>
        <WeatherTemperature />
        <ExtraInfo humidity={70} wind={5}/>
    </div>
);

export default WeatherData;