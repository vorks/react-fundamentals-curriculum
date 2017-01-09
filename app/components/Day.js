import React from 'react';
import { getDate } from '../helpers/utils';

const styles = {
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 35
  },
  date: {
    color: '#333',
    fontSize: 30,
    fontWeight: 100
  },
  weather: {
    height: 130
  }
}

export default function Day(props) {
  const date = getDate(props.day.dt);
  const icon = props.day.weather[0].icon;

  return (
    <div style={styles.container}>
      <img
        src={'/app/images/weather-icons/' + icon + '.svg'}
        alt='Weather'
        style={styles.weather} />
      <h2 style={styles.date}>{date}</h2>
    </div>
  );
}
