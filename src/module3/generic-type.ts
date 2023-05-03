type GenericTuple<X, Y> = [X, Y]


const realation: GenericTuple<string, string> = ['Emon', 'kate winslet']

const relationWithSalary: GenericTuple<object, string> = [{
    name: "Emon",
    salary: 1000
}, 'kate winslet']




type GenericArray<T> = Array<T>

const rollNumbers: number[] = [44, 3, 543];
const rollNumbers2: string[] = ["33", "43", "23"]

const rollNumber3: Array<boolean> = [true, false]
const userNamerollNumbers: Array<{ name: string; roll: number }> = [{
    name: "mr. x",
    roll: 1
}, {
    name: "mr. y",
    roll: 2
}]




















