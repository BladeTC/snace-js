var assert = require("assert");
var test = require("mocha").test;

function sum(...args) {
  return (args ?? []).reduce((prev, curr) => curr + prev, 0);
}

test("test", function () {
  // Prepare
  const arr = [0, 1, 2, 3];
  // Execute
  const result = sum(...arr);
  // Assert
  assert.equal(result, 6);
});

test("test2", function () {
  // Prepare
  // Execute
  const result = sum(0, 1, 2, 3);
  // Assert
  assert.equal(result, 6);
});

// Prepare
// Execute
// Assert
