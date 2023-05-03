// //normal function
// //default parameter

// function add(num1: number = 10, num2: number = 10) {
//     return num1 + num2
// }
// add(20, 30)

// //spread operator
// const myFriends = ['rhandler', 'joey', 'ross']
// const newFriends = ['monica', 'rachek', 'pheobe']
// const myBestFrind = {
//     fullName: "abul bashar",
//     "age": 23
// }
// const [bestfriend] = myFriends;
// const { fullName } = myBestFrind


// myFriends.push(...newFriends)

// console.log(myFriends)


// // rest parameter
// const greetFriends = (...friends: string[]): void => friends.forEach(frnd => console.log(`hi ${frnd}`))

// greetFriends("kasehem", "hasiem", "gashem", "emon", "hossain")

// // array and object distructuring







// const addArrow = (num1: number, num2: number): number => num1 + num2

// const arr = [1, 4, 5]
// const newArray = arr.map((element: number) => element * element)


// //object function
// const person: {
//     name: string,
//     balance: number,
//     addBalance(money: number): void
// } = {
//     name: "Emon",
//     balance: 5,
//     addBalance(money: number) {
//         // console.log(`My New balance is ${this.balance + money}`);
//     }
// }








