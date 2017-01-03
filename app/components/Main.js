import React from 'react';

const styles = {
	children: {
		paddingLeft: '0',
		paddingRight: '0',
		height: 'calc(100% - 52px)'
	},
	container: {
		height: '100%',
	},
	navbar: {
		marginBottom: '0'
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
						<a className="navbar-brand" href="#">Main.js header</a>
					</div>
					<div className="collapse navbar-collapse" id="navbar">
						<ul className="nav navbar-nav">
						</ul>
					</div>
				</div>
			</nav>
			<div className="container-fluid" style={styles.children}>
				{props.children}
			</div>
		</div>
	);
}
