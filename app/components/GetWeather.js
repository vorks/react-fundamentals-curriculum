import React, { Component, PropTypes } from 'react';

export default class GetWeather extends Component {
	render() {
		return (
			<form className={this.props.formClass} style={this.props.formStyle}>
				<div className="form-group" style={this.props.groupStyle}>
					<label className={this.props.labelClass} style={this.props.labelStyle}>
						Enter a City and State
					</label>
					<input
						className="form-control"
						type="text"
						placeholder="Melbourne, Australia"
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