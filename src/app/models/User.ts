export class User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
    }
    geo: {
        lat: string;
        lng: string;
    }
    phone: string;

    constructor(user){
        this.id=user.id;
        this.name = user.name;
        this.email = user.email;
        this.address = user.address;
        this.geo = user.geo;
        this.phone = user.phone;
    }
}