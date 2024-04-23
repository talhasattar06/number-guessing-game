#! /usr/bin/env node
import inquirer from "inquirer";
// const randomNumber: number = 11;
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answers = await inquirer.prompt([
    {
        name: "userNumber",
        type: "number",
        message: "Please guess a number between 1-5: ",
    },
]);
if (answers.userNumber === randomNumber) {
    console.log(" YAY! You guessed the number correctly!");
}
else {
    console.log("You did not guessed the number, Please try again!");
}
