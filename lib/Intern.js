const Employee = require("./Employee");

// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee {

    //add constructor with school parameter used in the intern.test.js
    //add code to inherit from employee class
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    //add functions listed in the intern.test.js file: getRole(), getSchool()
    getRole() {
        //add code to return "Engineer", since that is what the test expects this function to do
        return "Intern";
    }
    getSchool() {
        //add code to return school, since that is what the test expects this function to do
        return this.school;
    }

}

//export this code to where it's called in other js files
module.exports = Intern