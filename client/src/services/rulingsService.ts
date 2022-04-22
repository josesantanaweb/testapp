import api from 'config/api';

const RulingsServices = {
	getRulings: async () => {
		const response = await api.get(`/rulings`, {});
		return response.data;
	},
	addRuling: async (data: any) => {
		const response = await api.post('/rulings', data, {});
		return response.data;
	},
	editRuling: async (id: string, data: any) => {
		const response = await api.put(`/rulings/${id}`, data, {});
		return response.data;
	},
};

export default RulingsServices;
