const Employee = require('../lib/employee');

describe("Employee", () => {
    // Test for all use cases when initializing a new Employee object
    it("should create an object with a name id and email properties", () => {

        // Arrange
        const employee = new Employee("Samantha", 1, "svellucci18@gmail.com");
    
        // Act
        

        // Assert
        expect(employee.name).toEqual("Samantha");
        expect(employee.id).toEqual(1);
        expect(employee.email).toEqual("svellucci18@gmail.com");
    })

})