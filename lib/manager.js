class Manager {
    constructor( name, id, email, officeNumber ) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }

    getName() {
        console.log(`name:` ${this.name});
        return this.name;
    }

    getId() {
        console.log(`id:` ${this.id});
        return this.id;
    }

    getEmail() {
        console.log(`email:` ${this.email});
        return this.email;
    }

    getOfficeNumber() {
        console.log(`officeNumber:` ${this.officeNumber});
        return this.officeNumber;
    }   

    getRole() {
        return Manager;
    }

}
