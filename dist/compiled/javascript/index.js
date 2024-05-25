"use strict";
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(1, 2));
// console.log(add("3", "4"));
console.log(add(+true, +false));
function printInfo(valueOne, valueTwo) {
    return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
}
console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
// console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work
let arr;
arr = [1, 2, 3];
arr = [[true], ["1", ["2", "3"]]];
function reportErrors(username, age) {
    let rank = "Professor";
    return `Username: ${username}`;
    console.log("We Will Not Reach Here");
}
console.log(reportErrors("Elzero", 40));
let nothing;
let theName = "Elzero";
function showMyDetails(a = "", b = "", c) {
    return `${a}${b}${c}`;
}
// Replace ???? With The Available Variables As Argument To Get The Result
console.log(showMyDetails(nothing, nothing, theName)); // Elzero
function showMsg(user, age, country) {
    return `${user}${age}${country}`;
}
console.log(showMsg());
console.log(showMsg("Elzero"));
console.log(showMsg("Elzero", 40));
console.log(showMsg("Elzero", "40", "Egypt"));
function printInConsole(...args) {
    args.forEach(element => {
        console.log(`The Value Is ${element} And Type Is ${typeof element}`);
    });
}
console.log(printInConsole(1, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));
// Do Not Edit Here
let myData;
myData = 1000; // No Problem Here
myData = +true; // No Problem Here
let myInfo;
myInfo = 1000; // No Problem Here
myInfo = true; // No Problem Here
// Do Not Edit Here
function showInfo(data) {
    console.log(`The Name Is ${data.theName}`);
    console.log(`The Age Is ${data.theAge}`);
}
console.log(showInfo({ theName: "Elzero", theAge: 40 }));
function showFullInfo(data) {
    console.log(`The Name Is ${data.theName}`);
    console.log(`The Age Is ${data.theAge}`);
    console.log(`The Country Is ${data.country}`);
}
console.log(showFullInfo({ theName: "Elzero", theAge: 4, country: "Egypt" }));
function yesOrNo(val) {
    if (typeof val === "number") {
        return val > 10 ? "Yes" : "No";
    }
    else if (typeof val === "boolean") {
        return val ? "Yes" : "No";
    }
    else {
        return "Error";
    }
}
// Do Not Edit Here
console.log(yesOrNo("100")); // Error
console.log(yesOrNo(30)); // True
console.log(yesOrNo(8)); // False
function isHeOld(age) {
    if (typeof age === "string") {
        // Convert string to number and handle invalid number cases
        const numericAge = parseInt(age, 10);
        if (isNaN(numericAge)) {
            throw new Error("Invalid age value");
        }
        age = numericAge;
    }
    if (typeof age === "number") {
        return age > 40 ? "Yes" : "No";
    }
    throw new Error("Invalid type");
}
// Do Not Edit Here
console.log(isHeOld("100")); // Error
console.log(isHeOld(45)); // "Yes"
console.log(isHeOld(30)); // "No"
// const post: [number, string, boolean] = [100, 200, "Title"]; // Error
// const post = ["Title", 100, true]; // Error
const post = [100, "Title", true]; // Good
// post.push("Elzero"); 
// Create Destructuring Here
const [id, title, state] = post;
// Do Not Edit Here
console.log(id); // 100
console.log(title); // "Title"
console.log(state); // true
// function calcInsane(num: number): number {
//     return num - 10;
// }
const calcInsane = (num) => num - 10;
var Game;
(function (Game) {
    Game[Game["Easy"] = 100] = "Easy";
    Game[Game["Medium"] = 80] = "Medium";
    Game[Game["Hard"] = 40] = "Hard";
    Game[Game["Insane"] = calcInsane(Game.Hard)] = "Insane";
})(Game || (Game = {}));
console.log(Game.Insane);
console.log(Game.Easy);
console.log(Game.Medium);
console.log(Game.Hard);
const user = {
    username: "Elzero",
    age: 40,
    website: "Elzero.org",
    skills: {
        frontEnd: ["HTML", "CSS", "JS"],
        backEnd: ["PHP", "Python"]
    }
};
// We Need To Remove Error From This Edits
user.username = "Osama";
user.age = "40";
user.skills.backEnd.push(100);
//# sourceMappingURL=index.js.map