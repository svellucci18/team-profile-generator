const Employee = require('../lib/Employee');


describe("Employee", () => {

    // Methods
    describe("initialization", () => {
        it("should build an engineer object", () => {
         const e = new Employee();
         expect(typeof(e)).toBe("object")   

        })
    });

    describe("getName", () => {
        it("", () => {
            // Arrange
            
            // Act
            // Call the getName method and store the result
            const e = new Employee("Samantha");

            // Assert
            // The result is equal to an expected value
            expect(e.getName()).toBe("Samantha");

        })
    });

    describe("getId", () => {
        it("", () => {
        const e = new Employee("Samantha",1);
        expect(e.getId()).toBe(1);
        })
    });

    describe("getEmail", () => {
        it("", () => {
        const e = new Employee("Samantha", 1, "svellucci18@gmail.com");
        expect(e.getEmail()).toBe("svellucci18@gmail.com");
        })
    });

    describe("getRole", () => {
        it("", () => {
        const e = new Employee();
        expect(e.getRole()).toBe("Employee");
        })
    });
})

