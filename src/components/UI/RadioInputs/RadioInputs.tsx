import React from "react";
import { IPosition } from "../../../models/IPosition";
import ErrorBlock from "../ErrorBlock/ErrorBlock";
import Loader from "../Loader/Loader";

interface IRadioInputsProps {
	title: string;
	name: string;
	positions: IPosition[];
	value: string;
	error: string | undefined
	touched: boolean | undefined
	handleChange: (e: React.ChangeEvent<any>) => void;
	isLoading: boolean
	isError: boolean
}
const RadioInputs: React.FC<IRadioInputsProps> = ({
	title,
	name,
	positions,
	value,
	error,
	touched,
	handleChange,
	isLoading,
	isError

}) => {
	return (
		<div className='form__item radio'>
			<div className='radio__title'>{title}</div>
			<div className={
				`${isLoading ? 'loader-wrap' : ''}
						${isError ? 'error-block-wrap' : ''}
						`}>
				{isLoading && <Loader />}
				{isError && <ErrorBlock />}
				{
					positions.map((pos, i) => (
						<label key={pos.id} className="radio-bl">
							<input
								className="radio-bl__input"
								type="radio"
								name={name}
								onChange={handleChange}
								value={pos.id}
								checked={value == pos.id}
							/>
							{pos.name}
							<div className="radio-bl__circle"></div>
						</label>
					))
				}
			</div>
			<div className='input-bl__error'>{error && touched && error}</div>
		</div>
	);
};

export default RadioInputs;
