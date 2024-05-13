#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellowBright("\n\t>>>>>>> Welcome To Number Guessing Game <<<<<<<\n"));
// const randomNumber: number = 11;
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answers = await inquirer.prompt([
    {
        name: "userNumber",
        type: "number",
        message: chalk.cyan("Please guess a number between 1-5: "),
    },
]);
if (answers.userNumber === randomNumber) {
    console.log(chalk.green("YAY! You guessed the number correctly!"));
}
else {
    console.log(chalk.magenta("You did not guessed the number, Please try again!"));
}
