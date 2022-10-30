import React from 'react';
import Form from '../Form/Form';

const Signup: React.FC = () => {
	return (
		<section className='signup'>
			<div className="container">
				<div className="signup-wrap">
					<h2 className="signup__title title">Working with POST request</h2>
					<Form />
				</div>
			</div>
		</section>
	);
};

export default Signup;
