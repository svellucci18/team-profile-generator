class Intern {
    constructor( name, id, email, school ) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
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

    getSchool() {
        console.log(`school:` ${this.school});
        return this.school;
    }

    getRole() {
        return Intern;
    }

}