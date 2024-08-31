import { axiosClassic } from '@/app/api/interceptors'

export const userService = {
	async getUserName(limit: number) {
		return (await axiosClassic.get(`/?results=${limit}`)).data
	},
}
