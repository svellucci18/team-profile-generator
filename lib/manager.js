const Employee = require("./Employee");

class Manager extends Employee {
    constructor( name, id, email, officeNumber ) {
        super( name, id, email );
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        console.log(`officeNumber: ${this.officeNumber}`);
        return this.officeNumber;
    }   

    getRole() {
        return Manager;
    }

}

module.exports = Manager;