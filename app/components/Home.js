import React from 'react';
import GetCity from './GetCity';

const styles = {
	container: {
		backgroundImage: 'url("app/images/pattern.svg")',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		height: '100%',
		width: '100%'
	},
	form: {
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'column'
	},
	group: {
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'column'
	},
	input: {
		width: 'auto'
	},
	label: {
		color: 'white'
	}
}

export default function Home(props) {
	return (
		<div style={styles.container}>
			<GetCity
				formStyle={styles.form}
				groupStyle={styles.group}
				labelClass="h1"
				labelStyle={styles.label}
				inputStyle={styles.input} />
		</div>
	);
}
