/* Tests run in a flow:

1. Describe Block, declaring a test suite. (A group of tests targeting one bit of code)

2. It, an individual test for the suite.

3. Expect, what we anticipate the output of a function will be.

4. Matching (validation, assertion, other words),  the comparitor that tests if the function outputs 
what you think it should

*/

const printGoodResult = function(expected, value) {
  console.log(`Success: expected ${expected} to equal ${value}`)
}

const printBadResult = function(expected, value) {
  console.log(`Fail: expected ${value} to equal ${expected}`)
}


const expect = function (value) {
  return {
    toEqual: function(expected) {
      if(value === expected) {
        printGoodResult(expected, value);
      } else {
        printBadResult(expected, value);
      }
    }
  }  
}

const simpleMath = function() {
  return 2 + 2
}

const myName = function() {
  const name = "Daniel";
  return name;
}

expect(myName()).toEqual("Daniel");