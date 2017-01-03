import React from 'react';

const styles = {
	brand: {
		color: '#fff'
	},
	children: {
		paddingLeft: 0,
		paddingRight: 0,
		height: 'calc(100% - 50px)'
	},
	container: {
		height: '100%',
	},
	navbar: {
		backgroundColor: 'rgba(252, 90, 44, 0.89)',
		border: 0,
		borderRadius: 0,
		marginBottom: 0
	}
}

export default function Main(props) {
	return (
		<div style={styles.container}>
			<nav className="navbar navbar-default" style={styles.navbar}>
				<div className="container-fluid">
					<div className="navbar-header">
						<button
							type="button"
							className="navbar-toggle collapsed"
							data-toggle="collapse"
							data-target="#navbar"
							aria-expanded="false">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar" />
							<span className="icon-bar" />
							<span className="icon-bar" />
						</button>
						<a className="navbar-brand" href="#" style={styles.brand}>Clever Title</a>
					</div>
					<div className="collapse navbar-collapse" id="navbar">
						<form className="navbar-form navbar-right">
							<div className="form-group">
								<label className="sr-only">Enter a City and State</label>
								<input className="form-control" type="text" placeholder="Melbourne, Australia" />
							</div>
							<button className="btn btn-success" type="submit">Get Weather</button>
						</form>
					</div>
				</div>
			</nav>
			<div className="container-fluid" style={styles.children}>
				{props.children}
			</div>
		</div>
	);
}
