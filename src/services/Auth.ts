import ApiService from "../api/api";
export const Auth = {
	getToken: async () => {
		try {
			const res = await ApiService.getToken()
			if (res.status === 200) {
				return res.data.token
			}
		} catch (error) {
			console.log(error)
		}
	}
}