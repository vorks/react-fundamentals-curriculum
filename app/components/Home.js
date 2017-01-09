import React from 'react';
import GetCity from './GetCity';

const styles = {
	container: {
		alignItems: 'center',
		backgroundImage: 'url("app/images/pattern.svg")',
		backgroundSize: 'cover',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		height: '100%',
		width: '100%'
	}
}

export default function Home(props) {
	return (
		<div style={styles.container}>
			<GetCity direction='column' hideLabel={false} />
		</div>
	);
}
