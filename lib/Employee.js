// TODO: Write code to define and export the Employee class
class Employee {

    //add constructor with name, id, and email parameters used in the employee.test.js
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //add functions listed in the employee.test.js file: getName(), getId(), getEmail(), getRole()
    getName() {
        //add code to rerutn name, since that is what the test expects this function to do
        return this.name;
    }
    
    getId() {
        //add code to rerutn the id, since that is what the test expects this function to do
        return this.id;
    }
    
    getEmail() {
        //add code to rerutn the email, since that is what the test expects this function to do
        return this.email;
    }
    
    getRole() {
        //add code to rerutn "Employee", since that is what the test expects this function to do
        return "Employee";
    }

}

//export this code to where it's called in other js files
module.exports = Employee