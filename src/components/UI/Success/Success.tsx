import React from 'react';
import success_img from "./../../../assets/img/success.svg"

const Success: React.FC = () => {
	return (
		<div className='success'>
			<div className="success-wrap">
				<h2 className="success__title title">User successfully registered</h2>
				<img className="success__img" src={success_img} alt="success" width="328px" height="290px" />
			</div>
		</div>
	);
};

export default Success;
