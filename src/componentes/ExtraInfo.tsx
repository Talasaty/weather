import * as React from 'react';

const WeatherExtraInfo = ( props: any ) => {
    const {humidity, wind} = props
    return(
        <div>
            <h4>{`Humedad: ${humidity}% Viento: ${wind}m/s`}</h4>
        </div>
);
}

export default WeatherExtraInfo;