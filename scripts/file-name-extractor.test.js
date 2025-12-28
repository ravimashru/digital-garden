const test = require("node:test");
const assert = require("node:assert");

const { extractFileNameWithoutExtension } = require("./file-name-extractor");

test("returns file name without extension as is", () => {
  assert.strictEqual(extractFileNameWithoutExtension("filename"), "filename");
});

test("returns file name with extension removed", () => {
  assert.strictEqual(
    extractFileNameWithoutExtension("Nested List Comprehensions in Python.md"),
    "Nested List Comprehensions in Python"
  );

  assert.strictEqual(
    extractFileNameWithoutExtension("test-file-name.md"),
    "test-file-name"
  );

  assert.strictEqual(
    extractFileNameWithoutExtension(
      "1.6 Have a strong WHY for doing something.md"
    ),
    "1.6 Have a strong WHY for doing something"
  );
});
