import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import SubHeader from '../atoms/SubHeader';
import { getDate } from '../helpers/utils';

const styles = {
  container: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 35
  },
  weather: {
    height: 130
  }
}

export default class Day extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.context.router.push({
      pathname: '/detail/' + this.props.city,
      state: {
        day: this.props.day
      }
    });
  }

  render() {
    const date = getDate(this.props.day.dt);
    const icon = this.props.day.weather[0].icon;

    return (
      <div onClick={this.handleClick} style={styles.container}>
        <img
          src={'/app/images/weather-icons/' + icon + '.svg'}
          alt='Weather'
          style={styles.weather} />
        <SubHeader text={date} />
      </div>
    );
  }
}

Day.contextTypes = {
  router: React.PropTypes.object.isRequired
}