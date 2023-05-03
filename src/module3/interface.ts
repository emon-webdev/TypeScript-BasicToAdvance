type User = {
    name: string;
    age: number;
}

interface IUser {
    name: string;
    age: number;
}

type extenedUser = User & {
    role: string;
}

interface IExtedeUser extends IUser {
    role: string
}

type rollNumber = number;

// object ,function , array
const addNumber = (number1: number, num2: number): number => number1 + num2;




const user: IExtedeUser = {
    name: "omanush",
    age: 2000,
    role: "Unknown"
}

const userWithTypeAlias: User = {
    name: 'Type Alias',
    age: 100
}

const userWithInterFace: IUser = {
    name: "Interface",
    age: 200
}











