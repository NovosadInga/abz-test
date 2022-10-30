import { IDataValue } from './../../components/Form/Form';
import ApiService from '../../api/api';
import { AppDispatch } from './../index';
import { createData } from '../../helpers/createData';

export const postDataForm =
	(obj: IDataValue) => async (dispatch: AppDispatch) => {
		const formData = createData(obj)
		const res = await ApiService.postUser(formData)
		return res
	}