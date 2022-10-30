import React from "react";
export interface IInputBlockProps {
	placeholder: string;
	id: string;
	type: string;
	name: string;
	help?: string;
	value: string;
	error: string | undefined
	touched: boolean | undefined
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleBlur: (e: React.FocusEvent<any, Element>) => void;
	onFocus?: (val: string) => void;
	setFieldValue?: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
}

const InputBlock: React.FC<IInputBlockProps> = ({
	placeholder,
	id,
	type,
	name,
	help,
	value,
	error,
	touched,
	handleChange,
	handleBlur,
	onFocus,
	setFieldValue
}) => {
	return (
		<div className={`form__item input-bl ${error && touched ? 'is_error' : ''}`}>
			<input
				placeholder={placeholder}
				className='input-bl__element'
				id={id}
				type={type}
				name={name}
				onFocus={() => {
					const val = onFocus && onFocus(value)
					setFieldValue && setFieldValue('phone', val)
				}}
				onChange={handleChange}
				onBlur={handleBlur}
				value={value}
			/>
			<label className='input-bl__label' htmlFor={id}>{placeholder}</label>
			{
				help && !(error && touched) && <div className='input-bl__help'>{help}</div>
			}
			<div className='input-bl__error'>{error && touched && error}</div>
		</div >
	);
};

export default InputBlock;
