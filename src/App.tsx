import React from 'react';
import Header from './components/Header/Header';
import Users from './components/Users/Users';
import Signup from './components/Signup/Signup';
import Primary from './components/Primary/Primary';

const App: React.FC = () => {
	return (
		<div className="out">
			<Header />
			<Primary />
			<Users />
			<Signup />
		</div>
	);
}

export default App;
