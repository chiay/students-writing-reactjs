import React from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import { AuthProvider } from './contexts/AuthContext';
import Dashboard from './components/Dashboard';
import PromptList from './components/PromptList';

function App() {
	return (
		<AuthProvider>
			<Router>
				<Switch>
					<Route path="/" component={Home} exact />
					<Route path="/signup" component={Signup} />
					<Route path="/login" component={Login} />
					<Route path="/dashboard" component={Dashboard} />
					<Route path="/promptlist" component={PromptList} />
				</Switch>
			</Router>
		</AuthProvider>
	);
}

export default App;