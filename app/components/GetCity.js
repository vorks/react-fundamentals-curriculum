import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import axios from 'axios';
import SuccessButton from '../atoms/SuccessButton';
import FormLabel from '../atoms/FormLabel';
import InputField from '../atoms/InputField';

export default class GetCity extends Component {
	constructor(props) {
		super(props);

		this.state = {city: ''};

		this.getStyles = this.getStyles.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	getStyles() {
		return {
			form: {
				alignItems: 'center',
				display: 'flex',
				flexDirection: this.props.direction || 'column',
				justifyContent: 'center',
				maxWidth: 300
			}
		}
	}

	handleChange(event) {
		this.setState({city: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.context.router.push('/forecast/' + this.state.city);
	}

	render() {
		const styles = this.getStyles();

		return (
			<form onSubmit={this.handleSubmit} style={styles.form}>
				<FormLabel screenReadersOnly={this.props.hideLabel} text='Enter a City and State' />
				<InputField
					type='text'
					placeholder='Melbourne, Australia'
					value={this.state.city}
					onChange={this.handleChange} />
				<SuccessButton type="submit" text='Get Weather' />
			</form>
		);
	}
}

GetCity.contextTypes = {
	router: React.PropTypes.object.isRequired
}
