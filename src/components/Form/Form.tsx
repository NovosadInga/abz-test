import { useEffect } from 'react';
import axios from 'axios'
import { Formik, FormikHelpers } from 'formik';
import { useCustomDispatch, useCustomSelector } from '../../hooks/useStore';
import { fetchPositions } from '../../store/thunks/fetchPositions';
import { fetchUsers } from '../../store/thunks/fetchUsers';
import { postDataForm } from '../../store/thunks/postDataForm';
import { selectPositions, selectUsers } from '../../store/selectors';
import { EModal, useModal } from '../../hooks/useModal';
import Button from '../UI/Button/Button';
import InputBlock from '../UI/InputBlock/InputBlock';
import RadioInputs from '../UI/RadioInputs/RadioInputs';
import InputFile from '../UI/InputFile/InputFile';
import Modal from '../UI/Modal/Modal';
import Loader from '../UI/Loader/Loader';
import ContentModal from '../ContentModal/ContentModal';
import { setErrorsServer, validate } from '../../helpers/validate';





export interface IDataValue {
	name: string,
	email: string,
	phone: string,
	position_id: string,
	file: File | ''
}
const initialValues: IDataValue = {
	name: '',
	email: '',
	phone: '',
	position_id: '',
	file: ''
}
const validationSchema = validate(initialValues);
const Form: React.FC = () => {
	const dispatch = useCustomDispatch()
	const { positions, isLoading, isError } = useCustomSelector(selectPositions)
	const { count } = useCustomSelector(selectUsers)
	const { showModal, closeModal, isOpenModal, typeModal, textModal } = useModal()
	useEffect(() => {
		dispatch(fetchPositions())
	}, []);
	async function handleSubmit(

		data: IDataValue,
		actions: FormikHelpers<IDataValue>
	) {
		try {
			actions.setSubmitting(true);
			const res = await dispatch(postDataForm(data))
			if (res.status === 201) {
				showModal(EModal.SUCCEESS)
				dispatch(fetchUsers({ count, page: 1 }))
				actions.resetForm({ values: initialValues })
				actions.setSubmitting(false);
			}
		} catch (error) {
			if (axios.isAxiosError(error)) {
				const type_error = error.response?.status
				switch (type_error) {
					case 422:
						setErrorsServer(error.response, actions.setFieldError);
						break
					case 409:
						showModal(EModal.ERROR, error.response?.data.message)
						actions.resetForm({ values: initialValues })
						break
					default:
						showModal(EModal.ERROR)
						actions.resetForm({ values: initialValues })
						break
				}
			} else {
				showModal(EModal.ERROR)
			}
			actions.setSubmitting(false);
		}
	}

	return (
		<>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={(values, actions) => {
					handleSubmit(values, actions)
				}}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					setFieldValue,
					isValid,
					dirty,
					isSubmitting,

					/* and other goodies */
				}) => (

					<form
						onSubmit={handleSubmit}
						className={`form ${isSubmitting ? 'loader-wrap' : ''}`}
					>
						{isSubmitting && <Loader />}
						<InputBlock
							placeholder='Your name'
							id='name'
							type='text'
							name='name'
							handleChange={handleChange}
							handleBlur={handleBlur}
							value={values.name}
							error={errors.name}
							touched={touched.name}
						/>
						<InputBlock
							placeholder='Email'
							id='email'
							type='text'
							name='email'
							handleChange={handleChange}
							handleBlur={handleBlur}
							value={values.email}
							error={errors.email}
							touched={touched.email}
						/>
						<InputBlock
							placeholder='Phone'
							id='phone'
							type='phone'
							name='phone'
							help="+38 (XXX) XXX XX XX"
							handleChange={handleChange}
							handleBlur={handleBlur}
							value={values.phone}
							error={errors.phone}
							touched={touched.phone}

						/>
						<RadioInputs
							title='Select your position'
							name='position_id'
							positions={positions}
							value={values.position_id}
							error={errors.position_id}
							touched={touched.position_id}
							handleChange={handleChange}
							isLoading={isLoading}
							isError={isError}
						/>
						<InputFile
							accept=".jpg, .jpeg"
							error={errors.file}
							setFieldValue={setFieldValue}
							isSubmitting={isSubmitting}
						/>
						<Button
							text="Sign up"
							type="submit"
							disabled={!(dirty && isValid) || isSubmitting}
						/>
					</form>
				)
				}
			</Formik >
			<Modal active={isOpenModal} closeModal={closeModal} classes={`modal_${typeModal}`}>
				<ContentModal text={textModal} type={typeModal} />
			</Modal>
		</>
	);
};
export default Form;
