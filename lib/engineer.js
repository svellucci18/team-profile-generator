class Engineer {
    constructor( name, id, email, github ) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
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

    getGithub() {
        console.log(`github:` ${this.github});
        return this.github;
    }   

    getRole() {
        return Engineer;
    }

}