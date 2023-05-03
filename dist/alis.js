"use strict";
const crush1 = {
    name: "Moina Pakhi",
    age: 22,
    profession: "web Developer",
    address: "uganda"
};
const crush2 = {
    name: "Tia Pakhi",
    profession: "Nex lavel Web desiger",
    address: "Maxico"
};
const isCrushMarried = false;
const courseName = "Next Lavel web deves";
const calculate = (num1, // 10
num2, // 20
oeration // (x, y) => x + y (10, 20) => 10+20
) => {
    return oeration(num1, num2);
};
calculate(10, 20, (x, y) => x + y);
calculate(10, 20, (x, y) => x - y);
calculate(10, 20, (x, y) => x * y);
