// Do Not Edit
// type numandstring = number | string;
//
// abstract class GameClass {
//     protected constructor(public title: string, public price: numandstring) {}
//     abstract getLocation() : string;
//     abstract getDiscount() : string;
// }
//
// // Start Edit And Fix
// class RPG extends GameClass {
//     constructor(title: string, price: numandstring, public rate: number) {
//         super(title, price);
//     }
//
//     getLocation() {
//         return "Location";
//     }
//     getDiscount() {
//         return "Discount";
//     }
// }
//
// class Action extends GameClass {
//     constructor(title: string, price: numandstring,public rate: number, public company: string) {
//         super(title, price);
//     }
//
//     getLocation() {
//         return "Location";
//     }
//     getDiscount() {
//         return "Discount";
//     }
// }
// // End Edit And Fix
//
// // Do Not Edit
// let gameOne = new RPG("Ys", 100, 10);
// let gameTwo = new Action("Uncharted", 90, 15, "Sony");
//
// console.log(gameOne.title); // "Ys"
// console.log(gameOne.price); // 100
// console.log(gameOne.rate); // 10
// console.log(gameOne.getDiscount()); // "Discount"
// console.log(gameOne.getLocation()); // "Location"
//
// console.log(gameTwo.title); // "Uncharted"
// console.log(gameTwo.price); // 90
// console.log(gameTwo.rate); // 15
// console.log(gameTwo.company); // "Sony"
// console.log(gameTwo.getDiscount()); // "Discount"
// console.log(gameTwo.getLocation()); // "Location"


// Write Function Code Here

// Do Not Edit Here
function showTypes<T = undefined, U = undefined, V = undefined>(t?: T, u?: U, v?: V) {
    return [typeof t, typeof u, typeof v];
}

console.log(showTypes()); // ["undefined", "undefined", "undefined"]
console.log(showTypes<string>("String")); // ["string", "undefined", "undefined"]
console.log(showTypes<string, number>("String", 100)); // ["string", "number", "undefined"]
console.log(showTypes<string, number, boolean>("String", 100, true)); // ["string", "number", "boolean"]



// Write Class Code Here
class Gamin<T> {
    constructor(public title: T, public price: number) {}
    getDiscount(discount: number | string) {
        return `The Discount Is ${discount}`;
    }
}

// Do Not Edit Here
let gameOne = new Gamin<string>("Ys", 100);
let gameTwo = new Gamin<number>(2064, 100); // There's A Game Called "2064"

console.log(gameOne.title); // "Ys"
console.log(gameOne.price); // 100
gameOne.getDiscount("50"); // "The Discount Is 50"

console.log(gameTwo.title); // 2064
console.log(gameTwo.price); // 100
gameTwo.getDiscount(80); // "The Discount Is 80"