const Manager = require('../lib/Manager');

describe("Manager", () => {
    // Methods
    describe("initialization", () => {
        it("should build an Manager object", () => {
         const e = new Manager();
         expect(typeof(e)).toBe("object")   

        })
    });

    describe("getOfficeNumber", () => {
        it("", () => {
        const e = new Manager("Samantha", 1, "svellucci18@gmail.com", "2066666666");
        expect(e.getOfficeNumber()).toBe("2066666666");
        })
    });

    describe("getRole", () => {
        it("", () => {
        const e = new Manager();
        expect(e.getRole()).toBe("Manager");
        })
    });

})