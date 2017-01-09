import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import axios from 'axios';

export default class GetCity extends Component {
	constructor(props) {
		super(props);
		this.state = {city: ''};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({city: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.context.router.push('/forecast/' + this.state.city);
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
						value={this.state.city}
						onChange={this.handleChange}
						style={this.props.inputStyle} />
				</div>
				<button className="btn btn-success" type="submit">Get Weather</button>
			</form>
		);
	}
}

GetCity.contextTypes = {
	router: React.PropTypes.object.isRequired
}

GetCity.defaultProps = {
	formClass: '',
	formStyle: {},
	groupStyle: {},
	labelClass: '',
	labelStyle: {},
	inputStyle: {}
};

GetCity.propTypes = {
	formClass: PropTypes.string,
	formStyle: PropTypes.object,
	groupStyle: PropTypes.object,
	labelClass: PropTypes. string,
	labelStyle: PropTypes.object,
	inputStyle: React.PropTypes.object
};
