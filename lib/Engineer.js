// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer {

    //add constructor with github uername parameter used in the engineer.test.js
    constructor(github) {
    this.github = github;
    }

    //add functions listed in the engineer.test.js file: getRole(), getGithub()
    getRole() {
        //add code to rerutn "Engineer", since that is what the test expects this function to do
        return "Engineer";
    }
    getGithub() {
        //add code to rerutn github username, since that is what the test expects this function to do
        return this.github;
    }

}