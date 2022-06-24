// Define an object to store all the operations
const operation = {
    1: "Addition",
    2: "Subtraction",
    3: "Multiplication",
    4: "Division"
}

// Ask the user for an input in accordance with the object
const op = prompt(`
    Select an operation you would like to perform.
    Press 1, 2, 3 or 4 to select the operation of your choice.
    1: Addition
    2: Subtraction
    3: Multiplication
    4: Division
`)

// Define the functions to carry out all the operations
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

// Validate the user's input
const validateNums = (num1, num2) => {
    if (!Number(num1) || !Number(num2)) {
        return false;
    }
    return true;
}

// Check if the user's input matches an operation in the function
if (operation[op]) {
    // If it does, ask the user for two more inputs
    const num1 = Number(prompt(`Choose a number.`));
    const num2 = Number(prompt(`Choose another number`));

    // Validate both inputs 
    if (validateNums(num1, num2) === true) {
        // If both inputs are numbers carry out an operation according to the user's choice
        if (op === "1") {
            alert(`The sum of ${num1} and ${num2} is ${add(num1, num2)}. Reload the page to start again.`);
        }
        if (op === "2") {
            alert(`The subtraction of ${num2} from ${num1} is ${subtract(num1, num2)}. Please reload the page to start again.`);
        }
        if (op === "3") {
            alert(`The multiplication of ${num1} and ${num2} is ${multiply(num1, num2)}. Please reload the page to start again.`);
        }
        if (op === "4") {
            alert(`The division of ${num1} by ${num2} is ${divide(num1, num2).toFixed(2)}. Please reload the page to start again.`);
        }
    }
    // Else ask the user to choose again
    else alert(`You did not choose a number. Please reload the page to start again.`);

}

// Else ask the user to choose another operation
else alert("You chose the wrong operation. Please reload the page to choose again.")
