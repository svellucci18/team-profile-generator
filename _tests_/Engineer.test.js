const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    // Methods
    describe("initialization", () => {
        it("should build an engineer object", () => {
         const e = new Engineer();
         expect(typeof(e)).toBe("object")   

        })
    });

    describe("getGithub", () => {
        it("", () => {
        const e = new Engineer("Samantha", 1, "svellucci18@gmail.com", "svell");
        expect(e.getGithub()).toBe("svell");
        })
    });

    describe("getRole", () => {
        it("", () => {
        const e = new Engineer();
        expect(e.getRole()).toBe("Engineer");
        })
    });

})