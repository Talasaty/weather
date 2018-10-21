import * as React from 'react';
import WeatherLocation from './componentes/WeatherLocation';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <WeatherLocation></WeatherLocation>
      </div>
    );
  }
}

export default App;
