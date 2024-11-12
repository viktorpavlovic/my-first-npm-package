// test.js
const sumTwoNumbers = require("sum-two-numbers");

function testSumTwoNumbers() {
  const result1 = sumTwoNumbers(2, 3);
  console.log("Test 1:", result1 === 5 ? "Passed" : "Failed");

  const result2 = sumTwoNumbers(-1, 1);
  console.log("Test 2:", result2 === 0 ? "Passed" : "Failed");

  const result3 = sumTwoNumbers(0, 0);
  console.log("Test 3:", result3 === 0 ? "Passed" : "Failed");
}

testSumTwoNumbers();
