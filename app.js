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
    inquirer.prompt([
        {
            type: 'list',
            message: 'What type of employee needs to be added to the team?',
            name: 'role',
            choices: ['Engineer', 'Intern', 'Manager', 'No more team members needed'],
        }
    ]).then(function ({ role }) {
        if (role === "Engineer") {
            //run the addEngineer function if the Engineer is selected
            addEngineer();
        };
        if (role === "Intern") {
            //run the addIntern function if the Intern is selected
            addIntern();
        };
        if (role === "Manager") {
            //run the addManager function if the Manager is selected
            addManager();
        };
        if (role === "No more team members needed") {
            //run the function to render the team
            generateTeam();
        };
    })
};

//add functions for each of the types of employees to be added
function addEngineer() {
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
};

function addIntern() {
    inquirer.prompt([
        //add question for each parameter listed in the intern constructor
        {
            type: 'input',
            message: 'What is the name of the intern?',
            name: 'internName',
        },
        {
            type: 'input',
            message: 'What is the ID of the intern?',
            name: 'internID',
        },
        {
            type: 'input',
            message: 'What is the email of the intern?',
            name: 'internEmail',
        },
        {
            type: 'input',
            message: 'What is the school of the intern?',
            name: 'internSchool',
        }
    ]).then ((data) => {
        //add data as new Intern
        const newIntern = new Intern(data.internName, data.internID, data.internEmail, data.internSchool);
        //add the new intern to the team array
        myTeam.push(newIntern);
        //start over to ask about adding another team member
        employeeType();
    })
};

function addManager() {
    inquirer.prompt([
        //add question for each parameter listed in the manager constructor
        {
            type: 'input',
            message: 'What is the name of the manager?',
            name: 'managerName',
        },
        {
            type: 'input',
            message: 'What is the ID of the manager?',
            name: 'managerID',
        },
        {
            type: 'input',
            message: 'What is the email of the manager?',
            name: 'managerEmail',
        },
        {
            type: 'input',
            message: 'What is the office number of the manager?',
            name: 'managerOffice',
        }
    ]).then ((data) => {
        //add data as new Manager
        const newManager = new Manager(data.managerName, data.managerID, data.managerEmail, data.managerOffice);
        //add the new manager to the team array
        myTeam.push(newManager);
        //start over to ask about adding another team member
        employeeType();
    })
};

//add function to render the final team
function generateTeam() {
    const finalTeam = render(myTeam);
    fs.writeFile(outputPath, finalTeam, (err) =>
    err ? console.log(err) : console.log("Success!"))
};

