// Good Luck! You got this 💪🏾
// Write your code here.

function calculator(num1, num2, operator) {
    let result;
    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        result = num1 / num2;
    } else {
        console.log("Invalid operator");
        return;
    }
    console.log(`The result of ${num1} ${operator} ${num2} is ${result}.`);
}
calculator(5, 3, "+");
calculator(5, 3, "-");
calculator(5, 3, "*");
calculator(5, 3, "/");
calculator(5, 3, "%"); 