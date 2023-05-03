// const searchName = (value: string | null) => {
//     if (value === null) {
//         console.log("there is nothing to search")
//     } else {
//         console.log("searching")
//     }
// }
// searchName(null)
// // km^1 --> ms^-1
// // unknow
// const getMyCarSpeed = (speed: unknown) => {
//     if (typeof speed === "number") {
//         const convetedSpeed = (speed * 1000) / 3600
//         console.log(`My speed is ${convetedSpeed}`)
//     } if (typeof speed === 'string') {
//         const [value, unit] = speed.split(' '); // ["10", "kmh^-1"]
//         const convetedSpeed = (parseFloat(value) * 1000) / 3600
//         console.log(`My speed is ${convetedSpeed}`)
//     } else {
//         console.log('there is wrong type')
//     }
// }
// getMyCarSpeed(10)
// getMyCarSpeed("10 kmh^-1")
// getMyCarSpeed(true)

// function throwError(message: string): never {
//     throw new Error(message)
// }
// throwError("Error hoyeche")




