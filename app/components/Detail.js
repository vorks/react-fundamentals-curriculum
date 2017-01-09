import React, { Component } from 'react';
import Day from './Day';
import SubHeader from '../atoms/SubHeader';
import { convertTempToCelcius } from '../helpers/utils';

const styles = {
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column'
  }
}

export default function Detail(props) {
  const city = props.routeParams.city;
  const day = props.location.state.day;
  const description = day.weather[0].description;
  const humidity = day.humidity;
  const temp = day.temp;
  const min = convertTempToCelcius(temp.min);
  const max = convertTempToCelcius(temp.max);

  return (
    <div style={styles.container}>
      <Day city={city} day={day} />
      <SubHeader text={city} />
      <SubHeader text={description} />
      <SubHeader text={'min temp: ' + min + 'C'} />
      <SubHeader text={'max temp: ' + max + 'C'} />
      <SubHeader text={'humidity: ' + humidity} />
    </div>
  );
}
