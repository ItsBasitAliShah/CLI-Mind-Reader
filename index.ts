#! /usr/bin/env node

import inquirer from "inquirer";

console.log("I will Read Your Mind!");

const answer = await inquirer.prompt([
  {
    message: "Think of a Number: ",
    type: "number",
    name: "chosenNumber",
  },
]);

console.log("The Number you were thinking of is: " + answer.chosenNumber);
