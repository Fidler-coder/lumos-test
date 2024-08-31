import axios, { type CreateAxiosDefaults } from 'axios'
import * as http from 'http'

const options: CreateAxiosDefaults = {
	baseURL: 'https://randomuser.me/api',
	headers: {
		'Content-Type': 'application/json',
		'X-Requested-With': 'XMLHttpRequest',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
		'Access-Control-Allow-Headers':
			'Content-Type, Authorization, Origin, X-Requested-With, Accept',
		'Access-Control-Allow-Credentials': 'true',
		'Access-Control-Expose-Headers': 'Content-Disposition',
		'Access-Control-Max-Age': '86400',
	},
	httpAgent: new http.Agent({ keepAlive: true }),
	withCredentials: false,
	maxBodyLength: 50 * 1024 * 1024,
	maxContentLength: 50 * 1024 * 1024,
}

const axiosClassic = axios.create(options)

export { axiosClassic }
