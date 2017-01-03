import React, {PropTypes} from 'react';

function GetWeather(props) {
	return (
		<form className={props.formClass} style={props.formStyle}>
			<div className="form-group" style={props.groupStyle}>
				<label className={props.labelClass} style={props.labelStyle}>Enter a City and State</label>
				<input
					className="form-control"
					type="text"
					placeholder="Melbourne, Australia"
					style={props.inputStyle} />
			</div>
			<button className="btn btn-success" type="submit">Get Weather</button>
		</form>
	);
}

GetWeather.propTypes = {
	formClass: PropTypes.string,
	formStyle: PropTypes.object,
	groupStyle: PropTypes.object,
	labelClass: PropTypes. string,
	labelStyle: PropTypes.object,
	inputStyle: React.PropTypes.object
}

export default GetWeather;