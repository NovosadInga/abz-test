import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPosition } from '../../models/IPosition';

const initialState = {
	isLoading: true,
	isError: false,
	positions: [] as IPosition[]

}
export const positionsSlice = createSlice({
	name: 'positions',
	initialState,
	reducers: {
		setPositions: (state, action: PayloadAction<IPosition[]>) => {
			state.positions = action.payload
			state.isLoading = false
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

export const { setPositions, setLoading, setError } = positionsSlice.actions
export default positionsSlice.reducer