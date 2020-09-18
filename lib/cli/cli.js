const path = require('path');
const fs = require('fs');
const { showTestResults } = require('./../');

const searchTestFolder = function () {
  if (!fs.existsSync('test/')) {
    return false;
  }
  return true;
};

const getTestFiles = function () {
  let file = null;

  if ((file = fs.readdirSync('test/'))) {
    return file.length == 0 ? null : file;
  }
};

//@param {*} file

const runTestFiles = function (f = []) {
  f.forEach((g) => {
    require(fs.realpathSync(`test/${g}`));
  });
  showTestResults();
};

const run = function () {
  if (searchTestFolder()) {
    let files;
    if ((files = getTestFiles())) {
      runTestFiles(files);
    } else {
      console.error('No tests found.');
    }
  } else {
    console.error(`'test/' folder doesn't exist`);
  }
};

run();
