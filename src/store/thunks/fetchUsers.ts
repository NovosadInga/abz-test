import { AppDispatch } from './../index';

import ApiService from '../../api/api';
import { setError, setLoading, setUsers } from '../slices/usersSlice';
import { IPage } from '../types';

export const fetchUsers =
	(obj: IPage) => async (dispatch: AppDispatch) => {
		try {
			dispatch(setLoading())
			const res = await ApiService.getUsers(obj)
			if (res.status === 200) {
				setTimeout(() => {
					dispatch(setUsers(res.data))
				}, 500)
			} else {
				dispatch(setError())
			}
		} catch (error) {
			dispatch(setError())
		}
	}