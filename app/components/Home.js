import React from 'react';

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
		  <form style={styles.form}>
		  	<div className="form-group" style={styles.group}>
			  	<label className="h1" style={styles.label}>Enter a City and State</label>
			  	<input className="form-control" placeholder="Melbourne, Victoria" style={styles.input} />
		  	</div>
		  	<button className="btn btn-success" type="submit">Get Weather</button>
		  </form>
		</div>
	);
}
