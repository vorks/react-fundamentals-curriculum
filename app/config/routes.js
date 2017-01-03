import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Main from '../components/Main';
import Home from '../components/Home';
import Forecast from '../components/Forecast';

const routes = (
	<Router history={browserHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={Home} />
			<Route path='forecast/:city' component={Forecast} />
		</Route>
	</Router>
);

export default routes;
