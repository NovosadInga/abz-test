import React from 'react';
import error_img from "./../../../assets/img/error.svg"
export interface IErrorProps {
	text: string;
}
const Error: React.FC<IErrorProps> = ({ text }) => {
	return (
		<div className='error'>
			<div className="error-wrap">
				<div>
					<img className="error__img" src={error_img} alt="error" width="100px" height="100px" />
				</div>
				<h2 className="error__title title">Error</h2>
				<div className="error__text">{text}</div>
			</div>
		</div>
	);
};

export default Error;
