const AUTHOR = 'KONISHI, Jumpei';

export class Member {
    constructor(firstName,lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

export class Area {
    static getTriangle(base,height) {
        return base * height / 2;
    }
}
