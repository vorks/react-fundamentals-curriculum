import React, { Component, PropTypes } from 'react';
import axios from 'axios';

export default class GetWeather extends Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();

		const cityName = this.state.value;
		const apiKey = '31c817fcb02c5a0b447e11df5143fd1e';
		const wType = 'accurate';
		const url = 'http://api.openweathermap.org/data/2.5/';
		const weatherUrl = url + 'weather';
		const forecastUrl = url + 'forecast/daily';
				
		axios.get(weatherUrl, {
				params: {
					q: cityName,
					type: wType,
					APPID: apiKey
				}
			})
			.then(response => {
				console.log('response: ', response);
			})
			.catch(error => {
				console.error('error: ', error);
			});
		
		axios.get(forecastUrl, {
				params: {
					q: cityName,
					cnt: 5,
					type: wType,
					APPID: apiKey	
				}
			})
			.then(response => {
				console.log('response: ', response);
			})
			.catch(error => {
				console.error('error: ', error);
			});
	}

	render() {
		return (
			<form
				className={this.props.formClass}
				onSubmit={this.handleSubmit}
				style={this.props.formStyle}>
				<div className="form-group" style={this.props.groupStyle}>
					<label className={this.props.labelClass} style={this.props.labelStyle}>
						Enter a City and State
					</label>
					<input
						className="form-control"
						type="text"
						placeholder="Melbourne, Australia"
						value={this.state.value}
						onChange={this.handleChange}
						style={this.props.inputStyle} />
				</div>
				<button className="btn btn-success" type="submit">Get Weather</button>
			</form>
		);
	}
}

GetWeather.propTypes = {
	formClass: PropTypes.string,
	formStyle: PropTypes.object,
	groupStyle: PropTypes.object,
	labelClass: PropTypes. string,
	labelStyle: PropTypes.object,
	inputStyle: React.PropTypes.object
};

GetWeather.defaultProps = {
	formClass: '',
	formStyle: {},
	groupStyle: {},
	labelClass: '',
	labelStyle: {},
	inputStyle: {}
}