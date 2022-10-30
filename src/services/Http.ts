// тут interceptors.request
import axios, { AxiosRequestConfig } from "axios";
import { Auth } from "./Auth";
const Http = (function () {
	const instance = axios.create();
	return {
		init: function () {
			instance.interceptors.request.use(async (config: AxiosRequestConfig<any>) => {
				const token = await Auth.getToken()
				return {
					...config,
					headers: { ...config.headers, Token: `${token}` }
				}
			})
			instance.interceptors.response.use(
				(response) => response,
				(error) => {
					if (error.response.status !== 401) return Promise.reject(error);
					// { checkToken }
				});
			return instance;
		}
	};
})();
export default Http;
