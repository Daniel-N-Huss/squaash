/* Tests run in a flow:

1. Describe Block, declaring a test suite. (A group of tests targeting one bit of code)

2. It, an individual test for the suite.

3. Expect, what we anticipate the output of a function will be.
  A function that returns an object with methods to call on the value given

4. Matching (validation, assertion, other words),  the comparitor that tests if the function outputs 
what you think it should

*/

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;



const expect = function (value) {
  return {
    toEqual: function (expected) {
      if (value === expected) {
        console.log(`Success: expected ${expected} to equal ${value}`);
        passedTests ++;
      } else {
        console.log(`Fail: expected ${value} to equal ${expected}`);
        failedTests ++;
      }
    },
    toNotEqual: function (expected) {
      if (value !== expected) {
        console.log(`Success: expected ${expected} to !equal ${value}`);
        passedTests ++;
      } else {
        console.log(`Fail: expected ${value} to equal ${expected}`);
        failedTests ++;
      }
    },
    toBeDefined: function () {
      if (value) {
        console.log(`Success, is defined as: ${value}`);
        passedTests ++;
      } else {
        console.log(`Fail: returned as ${value}`)
        failedTests ++;
      }
    }
  };
};

const showTestResults = function() {
  console.log(`Of the ${totalTests} tests run, ${passedTests} passed, and ${failedTests} failed`);
}

const simpleMath = function () {
  return 2 + 2;
};

const myName = function () {
  const name = 'Daniel';
  return name;
};

let nomad;

expect(myName()).toEqual('Daniel');

expect(nomad).toBeDefined();

showTestResults();