// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const generateHTML = require('./utils/generateHTML');
// const path = require('path');
// const prompts = new Rx.Subject(); // Review Reactive interface on inquirer docs

// Declare the object that will store all the info in the global scope.
const employees = [];

// Create an array of questions for user input SHOULD THIS BE employees and use template literals to grab employee type?
const managerQuestions = [
    {
        type: 'input',
        message: "What is the team manager's name?",
        name: 'name',
    },
    {
        type: 'number',
        message: "What is the team manager's id?",
        name: 'id',
    },
    {
        type: 'input',
        message: "What is the team manager's email?",
        name: 'email',
    },
    {
        type: 'number',
        message: "What is the team manager's office number?",
        name: 'officeNumber',
    },
];

// Ask for manager info
function init() { // WOULD THIS BE BETTER AS AN ASYNC AWAIT FUNCTION
    inquirer
        // Prompt user for the data
        .prompt(
            // `Welcome to the team generator!
            // Use 'npm run reset' to reset the dist/ folder`
            managerQuestions)

        // THEN create and store an object for the Manager
        .then((response) => {
            console.log(response);
        })

        // THEN whatNext()

        // THEN writeFile()
}



// Ask for engineer info

    // Prompt user for the data

        // THEN create and store an object for the Engineer

        // THEN whatNext()


// Ask for intern info

    // Prompt user for the data

        // THEN create and store an object for the Intern

        // THEN whatNext()


// Ask what they would like to do next whatNext()

    // Add Engineer, Add Intern or All done

        // IF `Add Engineer` -> `Ask for engineer info`

        // IF `Add Intern` -> `Ask for intern info`

        // IF `All done` -> `build an html page`

// Use all of the information to build an html page
init();
