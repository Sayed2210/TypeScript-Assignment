interface Member {
    id: number | string;
    username: string;
    country?: string;
    state: boolean;
    getName(): string;
}

// Do Not Edit The Code Below
let user: Member = { // Property 'country' is missing in type
    id: 100,
    username: "Elzero",
    state: true,
    getName()   { // 'getName' does not exist in type 'Member'
        return this.username;
    }
}

user.id = 200;
user.id = "200"; // Type 'string' is not assignable to type 'number'
user.state = false;


// Create Interface Here
interface Client {
    id: number;
    username: string;
    active: boolean;
    discount: number;
    getPrice(price: number): number;
}
// Do Not Edit The Code Below
let client: Client = {
    id: 100,
    username: "Elzero",
    active: true,
    discount: 10,
    getPrice(price: number) {
        return price - this.discount;
    }
}

console.log(`Client Id Is ${client.id}`);
console.log(`Client Name Is ${client.username}`);
console.log(`Client Has Dicount ${client.discount}`);
console.log(`Client Product After Discount Is ${client.getPrice(200)}`);

// Do Not Edit The Code Below
interface Man {
    title: string;
    weight: number;
    age: number;
}

interface Bird {
    canFly: boolean;
}

interface Superman extends Man, Bird {
    bodyType: string;
    origin: string;
}

let creature: Superman = {
    title: "Superman",
    weight: 100,
    age: 500,
    canFly: true,
    bodyType: "Iron",
    origin: "Krypton"
}

console.log(`Creature Title Is ${creature.title}`);
console.log(`Creature Weight Is ${creature.weight}`);
console.log(`Creature Age Is ${creature.age}`);
console.log(`Creature Can Fly Is ${creature.canFly}`);
console.log(`Creature Body Type Is ${creature.bodyType}`);
console.log(`Creature Origin Is ${creature.origin}`);


// Create Class Here
// class Player {
//     name: string;
//     type: string;
//     number: number | string;
//     vip?: boolean;
//     constructor(name: string, type: string, number: number | string, vip?: boolean) {
//         this.name = name;
//         this.type = type;
//         this.number = number;
//         this.vip = vip;
//     }
//     details(): string {
//         return this.vip ? `VIP ${this.name}, Type Is ${this.type} Level Is ${this.number}` : `${this.name}, Type Is ${this.type} Level Is ${this.number}`
//     }
// }
// // Do Not Edit The Code Below
// let player1 = new Player("Osama", "Mage", 90, true);
// let player2 = new Player("Shady", "Archer", "85", false);
// let player3 = new Player("Amr", "Fighter", 50, true);
// let player4 = new Player("Mahmoud", "Assassin", 77);
//
// console.log(player1.details()); // VIP Osama, Type Is Mage Level Is 90
// console.log(player2.details()); // Shady, Type Is Archer Level Is 85
// console.log(player3.details()); // VIP Amr, Type Is Fighter Level Is 50
// console.log(player4.details()); // Mahmoud, Type Is Assassin Level Is 77


class Shorten {
    // public id: number;
    // public username: string;
    // protected title: string;
    constructor (public id: number,public username: string, protected  title: string) {
        this.id = id;
        this.username = username;
        this.title = title;
    }
}

let tester = new Shorten(100, "Elzero", "Developer");

console.log(tester.id);
console.log(tester.username);
// console.log(tester.title);


class Show {
    constructor (private _title: string) {}

    get title() : string {
        return this._title;
    }
    set title(value: string) {
        this._title = value;
    }
}

let testerPrivet = new Show("Elzero");

console.log(testerPrivet.title); // Property 'title' does not exist on type 'Show'
testerPrivet.title = "Osama"; // Property 'title' does not exist on type 'Show'
console.log(testerPrivet.title); // Property 'title' does not exist on type 'Show'


interface Play {
    id: number;
    title: string;
    level: number | string;
    logIn(): void;
    logOut(msg: string): void;
}

// Create Your Class Here
class Player implements Play {
    id: number;
    title: string;
    level: number | string;
    constructor(id: number, title: string, level: number | string) {
        this.id = id;
        this.title = title;
        this.level = level;
    }
    logIn(): void {
        console.log("Logged In");
    }
    logOut(msg: string): void {
        console.log(msg);
    }
}

let player1 = new Player(100, "Elzero", 95);

console.log(player1.id); // 100
console.log(player1.title); // "Elzero"
console.log(player1.level); // 95
player1.logIn(); // Logged In
player1.logOut("Good Bye"); // Logged Out, Good Bye