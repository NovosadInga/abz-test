import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IGetUsers } from '../../api/types';
import { IUser } from '../../models/IUser';

const initialState = {
	isLoading: false,
	isError: false,
	total_pages: 0,
	total_users: 0,
	count: 6,
	page: 1,
	users: [] as IUser[]

}
export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		setUsers: (state, action: PayloadAction<IGetUsers>) => {
			const data = action.payload
			state.total_pages = data.total_pages
			state.page = data.page
			state.total_users = data.total_users
			if (data.page === 1) state.users = []
			state.users = state.users.concat(data.users)
			state.isLoading = false
		},
		setFirstPage: (state) => {
			state.page = 1
		},
		setLoading: (state) => {
			state.isLoading = true
		},
		setError: (state) => {
			state.isError = true
			state.isLoading = false
		}
	}
})

export const { setUsers, setError, setLoading, setFirstPage } = usersSlice.actions
export default usersSlice.reducer