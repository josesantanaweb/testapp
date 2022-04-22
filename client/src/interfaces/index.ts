export interface Ruling {
	_id: string;
	name: string;
	description: string;
	category: string;
	picture: string;
	updatedAt: string;
	votes: {
		positive: number;
		negative: number;
	};
}
