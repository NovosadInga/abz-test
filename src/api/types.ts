import { IPosition } from '../models/IPosition';
import { IUser } from '../models/IUser';
interface ISuccess {
	success: boolean
}
export interface IGetToken extends ISuccess {
	token: string
}
export interface IGetUsers extends ISuccess {
	total_pages: number;
	total_users: number;
	count: number;
	page: number;
	users: IUser[]
}
export interface IGetPositions extends ISuccess {
	positions: IPosition[]
}
export interface IPostUser extends ISuccess {
	message: string
	user_id: number
}
