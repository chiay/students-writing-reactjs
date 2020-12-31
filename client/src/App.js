import React from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import { AuthProvider } from './contexts/AuthContext';
import Dashboard from './components/Dashboard';
import PromptList from './components/PromptList';
import PromptOverview from './components/PromptOverview';
import PrivateRoute from './components/PrivateRoute';

function App() {
	return (
		<AuthProvider>
			<Router>
				<Switch>
					<Route path="/" component={Home} exact />
					<Route path="/signup" component={Signup} />
					<Route path="/login" component={Login} />
					<PrivateRoute path="/dashboard" component={Dashboard} />
					<Route path="/promptlist" component={PromptList} />
					<Route path="/promptoverview/:id" component={PromptOverview} />
				</Switch>
			</Router>
		</AuthProvider>
	);
}

export default App;
