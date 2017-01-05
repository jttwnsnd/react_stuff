import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/charts'


class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const pressures = cityData.list.map(weather => weather.main.pressure);

    console.log(temps);

    return(
      <tr key={name}>
        <td>{name}</td>
          <td><Chart data={temps} color={'black'} units="K"/></td>
          <td><Chart data={humidities} color={'blue'} units="%"/></td>
          <td><Chart data={pressures} color={'green'} units="hPa"/></td>
      </tr>
    )
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Humidity (%)</th>
            <th>Pressure (hPa)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ weather }) {
  return {weather}
}

export default connect(mapStateToProps)(WeatherList);
