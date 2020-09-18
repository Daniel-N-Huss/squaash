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
let stats = [];
let currDesc = {
  it: [],
};

let currIt = {};

itResults = [];

// todo before/after each/all here

const expect = function (value) {
  return {
    toEqual: function (expected) {
      if (value === expected) {
        itResults.push({
          name: `Expected ${value} toEqual ${expected}`,
          status: true,
        });
        passedTests++;
      } else {
        itResults.push({
          name: `Expected ${value} toEqual ${expected}`,
          status: false,
        });
        failedTests++;
      }
    },
    toNotEqual: function (expected) {
      if (value !== expected) {
        console.log(`Success: expected ${expected} to !equal ${value}`);
        passedTests++;
      } else {
        console.log(`Fail: expected ${value} to equal ${expected}`);
        failedTests++;
      }
    },
    toBeDefined: function () {
      if (value) {
        console.log(`Success, is defined as: ${value}`);
        passedTests++;
      } else {
        console.log(`Fail: returned as ${value}`);
        failedTests++;
      }
    },
  };
};

const it = function (description, testFunction) {
  totalTests++;

  //beforeEach here

  currIt = {
    name: description,
    expects: [],
  };

  testFunction.apply(this);

  currDesc.it.push(currIt);
};

const describe = function (description, testGroup) {
  currDesc = {
    it: [],
  };

  currDesc.name = description;
  testGroup.apply(this);

  stats.push(currDesc);
};

exports.showTestResults = function showTestResults() {
  console.log(
    `
    Of the ${totalTests} tests run: 
    ${passedTests} passed, and ${failedTests} failed
    
    `
  );

  console.log('Test Suites');
  for (let x = 0; x < stats.length; x++) {
    const testGroup = stats[x];
    const descName = testGroup.name;
    const its = testGroup.it;
    console.log(descName);

    for (let y = 0; y < its.length; y++) {
      let test = its[y];
      console.log(`      ${test.name}`)

      for (let z = 0; z < test.expects.length; z++) {
        const expect = test.expects[z];
        console.log(`         ${expect.status === true ? '✔︎ Passed!' : 'Ⓧ Failed'}`)
      }
    }
    console.log()
  }
}

global.describe = describe;
global.it = it;
global.expect = expect;



const simpleMath = function () {
  return 2 + 2;
};

const myName = function () {
  const name = 'Daniel';
  return name;
};

let nomad;

expect(myName()).toEqual('Daniel');

expect('Daniel').toEqual(5);

expect(nomad).toBeDefined();

showTestResults();
