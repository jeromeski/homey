import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { init } from '../reducers';
import Header from './Header';
import Home from './Home';
import Login from '../components/Login';
import Register from '../components/Register';

const store = init();

const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<div className='page'>
					<Header />
					<div className='container'>
						<Route exact path='/' component={Home} />
						<Route exact path='/login' component={Login} />
						<Route exact path='/register' component={Register} />
					</div>
				</div>
			</BrowserRouter>
		</Provider>
	);
};

export default App;
