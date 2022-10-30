
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { getDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware'
import usersSlice from './slices/usersSlice';
import positionsSlice from './slices/PositionSlice';

const rootReducer = combineReducers({
	users: usersSlice,
	positions: positionsSlice,

})
export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware => getDefaultMiddleware({
		serializableCheck: false
	})
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch