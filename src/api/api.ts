import axios, { AxiosResponse } from "axios";
import Http from '../services/Http';
import { BASE_URL } from './../constants/index';
import { IPage } from '../store/types';
import { IPostUser, IGetPositions, IGetUsers, IGetToken } from './types';


const Axios = Http.init();
export default class ApiService {
	static async getToken(): Promise<AxiosResponse<IGetToken>> {
		return axios.get<IGetToken>(`${BASE_URL}/token`);
	}
	static async getUsers({ count, page }: IPage): Promise<AxiosResponse<IGetUsers>> {
		return axios.get<IGetUsers>(`${BASE_URL}/users?page=${page}&count=${count}`);
	}
	static async getPositions(): Promise<AxiosResponse<IGetPositions>> {
		return axios.get<IGetPositions>(`${BASE_URL}/positions`);
	}
	static async postUser(data: FormData): Promise<AxiosResponse<IPostUser>> {
		return Axios.post<IPostUser>(`${BASE_URL}/users`, data)
	}
}