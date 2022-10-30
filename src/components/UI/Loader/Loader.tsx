import React from 'react';
import loader from "./../../../assets/img/loading.svg"

const Loader: React.FC = () => {
	return (
		<div className='loader'>
			<img
				className='loader-img'
				src={loader}
				alt="...loading"
				width="100px"
				height="100px" />
		</div>
	);
};

export default Loader;
