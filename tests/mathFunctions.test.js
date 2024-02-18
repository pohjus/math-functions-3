// Import the function to be tested
const { add, subtract, multiply, divide } = require("../src/mathFunctions"); // Adjust the path as needed

// Describe the test suite (a group of related tests)
describe("Math Functions", () => {
  test("Addition", () => {
    const result = add(3, 5);
    expect(result).toBe(8);
  });

  test("Subtract", () => {
    const result = subtract(5, 2);
    expect(result).toBe(3);
  });

  test("Multiply", () => {
    const result = multiply(2, 5);
    expect(result).toBe(10);
  });

  test("Divide", () => {
    const result = divide(10, 2);
    expect(result).toBe(5);
    expect(2).toBe(divide(4, 2));
    expect(4).toBe(divide(8, 2));
  });
});
