export class Berry {
	name: string;
	id: number;
	description: string;
	address: string;
	city: string;
	country: string;
	category: number;
	liked: boolean;
	userId: number;

	constructor (name, description, category) {
		this.name = name;
		this.id = 1;
		this.description = description;
		this.address = '';
		this.city = '';
		this.country = '';
		this.category = category;
		this.liked = false;
		this.userId = 1;
	}
};

