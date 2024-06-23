import { baseUrl } from '@/constants';

export const useFetch = async path => {
	try {
		const res = await fetch(baseUrl + path);
		const { data } = res.json();
		return {
			data,
			error: null
		};
	} catch (error) {
		return {
			error,
			data: null
		};
	}
};
