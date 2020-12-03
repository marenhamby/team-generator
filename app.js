//classes with constructors
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//module dependencies
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//empty array to hold the team members in
const myTeam = [];

//run the function to start asking questions about what team members to add
employeeType();

//add function to figure out which type of employee is being added, then run function according to what choice is selected
function employeeType() {
    console.log("running!")
    inquirer.prompt([
        {
            type: 'list',
            message: 'What type of employee needs to be added to the team?',
            name: 'role',
            choices: ['Engineer', 'Intern', 'Manager', 'No more team members needed'],
        }
    ]).then(function ({ role }) {
        if (role === "Engineer") {
            console.log("Engineer selected")
            //run the addEngineer function if the Engineer is selected
            addEngineer();
        };
        if (role === "Intern") {
            console.log("Intern selected")
            //run the addIntern function if the Intern is selected
            addIntern();
        };
        if (role === "Manager") {
            console.log("Manager selected")
            //run the addManager function if the Manager is selected
            addManager();
        };
        if (role === "No more team members needed") {
            console.log("Team full")
            //run the function to render the team
            generateTeam();
        };
    })
}

//add functions for each of the types of employees to be added
function addEngineer() {
    console.log("Adding Engineer")
    inquirer.prompt([
        //add question for each parameter listed in the engineer constructor
        {
            type: 'input',
            message: 'What is the name of the engineer?',
            name: 'engineerName',
        },
        {
            type: 'input',
            message: 'What is the ID of the engineer?',
            name: 'engineerID',
        },
        {
            type: 'input',
            message: 'What is the email of the engineer?',
            name: 'engineerEmail',
        },
        {
            type: 'input',
            message: 'What is the GitHub username of the engineer?',
            name: 'engineerGithub',
        }
    ]).then ((data) => {
        //add data as new Engineer
        const newEngineer = new Engineer(data.engineerName, data.engineerID, data.engineerEmail, data.engineerGithub);
        //add the new engineer to the team array
        myTeam.push(newEngineer);
        //start over to ask about adding another team member
        employeeType();
    })
}

function addIntern() {

}

function addManager() {

}



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
