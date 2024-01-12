const assert = require('assert');
const { filterList, validateInput } = require('./solution.js');


const invalid = -1;

// Test case 1: Valid input
const testInput1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const expectedOutput1 = [0, 1, 5, 7]
const testMults1 = [2, 3]
console.log("\nTEST 1 [ sanity ]", testInput1, testMults1)
const result1 = filterList(testInput1, testMults1)
assert.deepStrictEqual(result1, expectedOutput1, 'TEST 1: FAILED [sanity check]')

// Test case 2: Invalid  [non-numeric]
const testInput2 = [1, 2, '3', 4, 's', 6, 7, 8, 9, 10] // '3' is not a number
const testMults2 = [2, 3]
console.log("\nTEST 2 [ invalid data ]", testInput2, testMults2)
const result2 = filterList(testInput2, testMults2)
assert.strictEqual(result2, invalid, 'TEST 2: FAILED [non-numeric]')

// Test case 2: Invalid  [length]
const testInput3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // length not a multiple of 10
const testMults3 = [2, 3]
console.log("\nTEST 3 [ invalid length ] ", testInput3, testMults3)
const result3 = filterList(testInput3, testMults3)
assert.strictEqual(result3, invalid, 'TEST 3: FAILED [length]')

// Test case 4: Valid input with invalid [0] mult
const testInput4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const testMults4 = [0];
console.log("\nTEST 4 [ invalid mult [0] ] ", testInput4, testMults4)
const result4 = filterList(testInput4, testMults4);
assert.deepStrictEqual(result4, invalid, 'TEST 4: FAILED [ invalid multiple (0) ] ');

// Test case 5: Valid input with negative mult
const testInput5 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const testMults5 = [-2, 3];
console.log("\nTEST 5 [ invalid mult (negative) ] ", testInput5, testMults5)
const result5 = filterList(testInput5, testMults5);
assert.deepStrictEqual(result5, invalid, 'TEST 5: FAILED [ invalid multiple (negative) ] ')

// // Test case 6: floating exclusion
const testInput6 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const testMults6 = [2.5];
console.log("\nTEST 6 [ invalid mult (floating) ] ", testInput6, testMults6)
const result6 = filterList(testInput6, testMults6);
assert.deepStrictEqual(result6, invalid, 'TEST 6: FAILED [ floating-point multiple ]');

console.log('\nTESTING COMPLETE')
