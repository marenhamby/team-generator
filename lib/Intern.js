const Employee = require("./Employee");

// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee {

    //add constructor with school parameter used in the intern.test.js
    //add code to inherit from employee class
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    
}