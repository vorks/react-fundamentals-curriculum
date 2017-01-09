import React, { Component } from 'react';
import Day from './Day';

const styles = {
  city: {
    color: '#333',
    fontWeight: 100,
    fontSize: 65,
    textAlign: 'center'
  },
  days: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: '50px auto',
    maxWidth: 1200
  }
}

export default class Forecast extends Component {
  constructor(props) {
    super(props);

    this.getDay = this.getDay.bind(this);
  }

  getDay(day) {
    return <Day key={day.dt} city={this.props.city} day={day} />
  }

  render() {
    return (
      <div>
        <h1 style={styles.city}>{this.props.city}</h1>
        <div style={styles.days}>{this.props.forecastData.list.map(this.getDay)}</div>
      </div>
    );
  }
}