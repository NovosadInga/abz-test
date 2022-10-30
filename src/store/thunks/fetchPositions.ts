import { AppDispatch } from './../index';
import ApiService from '../../api/api';
import { setPositions, setError, setLoading } from '../slices/PositionSlice';

export const fetchPositions =
	() => async (dispatch: AppDispatch) => {
		try {
			dispatch(setLoading())
			const res = await ApiService.getPositions()
			if (res.status === 200) {
				dispatch(setPositions(res.data.positions))
			} else {
				dispatch(setError())
			}
		} catch (error) {
			console.log(error)
			dispatch(setError())
		}
	}