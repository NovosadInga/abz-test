import React, { useEffect, useState } from "react";
interface IInputFileProps {
	accept: string;
	error: string | undefined;
	setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
	isSubmitting: boolean;
}
const InputFile: React.FC<IInputFileProps> = ({
	accept,
	error,
	setFieldValue,
	isSubmitting
}) => {
	const [photoName, setPhotoName] = useState<string>('');
	const [fileTouched, setFileTouched] = useState(false);
	useEffect(() => {
		if (isSubmitting) {
			setPhotoName('')
			setFileTouched(false)
		}
	}, [isSubmitting]);

	const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFileTouched(true)
		if (!e.target.files) return false;
		setPhotoName(e.target.files[0].name ? e.target.files[0].name : "")
		setFieldValue('file', e.target.files[0]);
		e.target.value = ''
	}
	return (
		<div className={`form__item file-bl ${error && fileTouched ? 'is_error' : ''}`}>
			<input
				className='file-bl__input'
				type="file"
				name="file"
				id='file'
				accept={accept}
				onChange={(e) => {
					handleChangeFile(e)
				}}
			/>
			<div className='file-bl-element'>
				<label className='file-bl__label' htmlFor="file">
					<span className="upload">{photoName ? 'Loaded' : 'Upload'}</span>
				</label>
				<div className='file-bl__text nowrap'>
					<span className="nowrap"> {photoName ? photoName : 'Upload your photo'} </span>
				</div>
			</div>
			<div className='input-bl__error'>{error && fileTouched && error}</div>
		</div>
	);
};

export default InputFile;
