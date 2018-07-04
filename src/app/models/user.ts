export class User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
    }

    constructor(user) {
        this.id = user.id;
        this.name = user.name;
        this.email = user.email;
        this.address = user.address;
        this.phone = user.phone;
    }
}