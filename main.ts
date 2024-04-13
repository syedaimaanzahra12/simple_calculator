#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter num1", type: "number", name: "num1" },
  { message: "Enter num2", type: "number", name: "num2" },
  {
    message: "Select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  }, 
]);
if (answer.operator === "Addition") {
  console.log(answer.num1 + answer.num2);
} else if (answer.operator === "Subtraction") {
  console.log(answer.num1 - answer.num2);
} else if (answer.operator === "Multiplication") {
  console.log(answer.num1 * answer.num2);
} else if (answer.operator === "Division") {
  console.log(answer.num1 / answer.num2);
} else {
  console.log("Please select valid operator");
}
