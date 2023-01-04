// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'fullName',
        message: 'What is your full name?',
    },
    {
        type: 'input',
        name: 'deploy',
        message: 'What is the deployed url for your project?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'projectName',
        message: 'What is your project/repo name?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Summarize your project:',
    },
    {
        type: 'input',
        name: 'demoURL',
        message: 'Enter the assets URL for the screenshot of your project demonstrating how it works:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Describe the installation process:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How would you test your project?',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List the credits:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a liscence.',
        choices: ["MIT", "GNU", "ISC", "Other"]
    },
];;

// TODO: Create a function to write README file
function writeToFile(fileName, data) {console.log("Creating README.");
fs.writeFileSync(fileName, data);
console.log("README Created.");}

// TODO: Create a function to initialize app
function init() {
     inquirer.prompt(questions)
    .then(data => {
    const markdownText = generateMarkdown(data);
    writeToFile("README.md", markdownText);
    });}

// Function call to initialize app
init();