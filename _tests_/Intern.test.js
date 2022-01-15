const Intern = require('../lib/Intern');

describe("Intern", () => {
    // Methods
    describe("initialization", () => {
        it("should build an Intern object", () => {
         const e = new Intern();
         expect(typeof(e)).toBe("object")   

        })
    });

    describe("getSchool", () => {
        it("", () => {
        const e = new Intern("Samantha", 1, "svellucci18@gmail.com", "uw");
        expect(e.getSchool()).toBe("uw");
        })
    });

    describe("getRole", () => {
        it("", () => {
        const e = new Intern();
        expect(e.getRole()).toBe("Intern");
        })
    });

})