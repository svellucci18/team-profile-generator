class Employee {
    constructor( name, id, email ) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        console.log(`name:` ${this.name});
        return this.name;
    }
}
