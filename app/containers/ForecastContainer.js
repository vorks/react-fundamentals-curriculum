import React, { Component } from 'react';
import Loading from '../components/Loading';
import Forecast from '../components/Forecast';
import { getForecast } from '../helpers/api';

export default class ForecastContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      city: '',
      isLoading: true,
      forecastData: {}
    }
  }

  componentDidMount() {
    this.updateCity(this.props.routeParams.city);
  }

  componentWillReceiveProps(nextProps) {
    this.updateCity(nextProps.routeParams.city);
  }

  makeRequest(city) {
    getForecast(city).then(this.loadData.bind(this));
  }

  loadData(forecastData) {
    this.setState({
      isLoading: false,
      forecastData: forecastData
    });
  }

  updateCity(city){
    this.makeRequest(city);
    this.setState({
      city: city
    });
  }

  render() {
    return this.state.isLoading === true
      ? <Loading />
      : <Forecast city={this.state.city} forecastData={this.state.forecastData} />
  }
}
