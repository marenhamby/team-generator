const Employee = require("./Employee");

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee {

    //add constructor with github officeNumber used in the engineer.test.js
    //add code to inherit from employee class
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    //add functions listed in the engineer.test.js file: getRole(), getOffice()
    getRole() {
        //add code to return "Engineer", since that is what the test expects this function to do
        return "Manager";
    }
    getOffice() {
        //add code to return officeNumber, since that is what the test expects this function to do
        return this.officeNumber;
    }
}

//export this code to where it's called in other js files
module.exports = Manager