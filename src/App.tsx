import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { UserRoute } from './components/Router/UserRoute';
import { AuthRoute } from './components/Router/AuthRoute';
import { LogIn } from './pages/login';
import { Profile } from './pages/profile';

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/" exact>
						<Redirect to="/login" />
					</Route>
					<AuthRoute path="/login">
						<LogIn />
					</AuthRoute>
					<UserRoute path="/profile">
						<Profile />
					</UserRoute>
				</Switch>
			</Router>
		</>
	);
}


export default App;
