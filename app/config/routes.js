import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Main from '../components/Main';
import Home from '../components/Home';
import Detail from '../components/Detail';
import ForecastContainer from '../containers/ForecastContainer';

const routes = (
	<Router history={browserHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={Home} />
			<Route path='forecast/:city' component={ForecastContainer} />
      <Route path='detail/:city' component={Detail} />
		</Route>
	</Router>
);

export default routes;