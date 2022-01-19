// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const generateHTML = require('./utils/generateHTML');
const path = require('path');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

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

// Engineer questions
const engineerQuestions = [
    {
        type: 'input',
        message: "What is your engineer's name?",
        name: 'name',
    },
    {
        type: 'number',
        message: "What is your engineer's id?",
        name: 'id',
    },
    {
        type: 'input',
        message: "What is your engineer's email?",
        name: 'email',
    },
    {
        type: 'input',
        message: "What is your engineer's GitHub username?",
        name: 'github',
    },
];

// Intern questions
const internQuestions = [
    {
        type: 'input',
        message: "What is your intern's name?",
        name: 'name',
    },
    {
        type: 'number',
        message: "What is your intern's id?",
        name: 'id',
    },
    {
        type: 'input',
        message: "What is your intern's email?",
        name: 'email',
    },
    {
        type: 'input',
        message: "What is your intern's school name?",
        name: 'school',
    },
];

// Ask for manager info
async function init() { // WOULD THIS BE BETTER AS AN ASYNC AWAIT FUNCTION
    console.log(
        `Welcome to the team generator!`)
    const response = await inquirer
        // Prompt user for the data
        .prompt(managerQuestions)

        // THEN create and store an object for the Manager
        // Pushing a class which pushes all of the properties that exist for that class
        employees.push(new Manager( response.name, response.id, response.email, response.officeNumber ));
        // console.log(response);
        // console.log(employees);

        // THEN whatNext()
        whatNext();

}

// Prompt to build team or close program
async function whatNext() {
    const response = await inquirer
    // Prompt user for employee type
    .prompt([{
        type: 'list',
        message: "Which type of team member would you like to add?",
        choices: ['Engineer', 'Intern', 'All done adding team members'],
        name: 'nextEmployee', 
    },])

    //  ask the respective questions for engineer or Intern
    // console.log(response);
  
    if(response.nextEmployee == 'Engineer') { // IF `Add Engineer` -> `Ask for engineer info`
        askForEngineerInfo();
    } else if (response.nextEmployee == 'Intern') { // IF `Add Intern` -> `Ask for intern info`
        askForInternInfo();
    } else {
        // By passing employees to generateHTML this pushes the class that was pushed in the init function this is referencing the file not the function
        writeToFile("index.html", generateHTML(employees)); // IF `All done` -> `build an html page`
    }
}


// Ask for engineer info
async function askForEngineerInfo() { 
    // Prompt user for data
    const response = await inquirer
        // Prompt user for the data
        .prompt(engineerQuestions)

        // THEN create and store an object for the Manager

        employees.push(new Engineer( response.name, response.id, response.email, response.github ));
        // console.log(response);
        // console.log(employees);

        // THEN whatNext()
        whatNext();

}

// Ask for intern info
async function askForInternInfo() { 
    // Prompt user for data
    const response = await inquirer
        // Prompt user for the data
        .prompt(internQuestions)

        // THEN create and store an object for the Manager

        employees.push(new Intern( response.name, response.id, response.email, response.school ));
        // console.log(response);
        // console.log(employees);

        // THEN whatNext()
        whatNext();

}

// Use all of the information to build an html page
function writeToFile(fileName, data) {

    // file name and data
    fs.writeFileSync(
        path.join("dist", fileName), data )
}


// Initialize application
init();
