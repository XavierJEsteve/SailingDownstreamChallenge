# About SailingDownstreamChallenge
Coding challlenge to serve as part of my application for a mentorship with the RISC-V foundation

## Challenge one: O Caml! My Caml!
1.Write a 20 line program in OCaml that does something interesting.

## Challenge two: Totally not fizzbuz
2.Write a Javascript, Python, or OCaml program that:
-accepts a list of integers
-emits an error message if the list is not a multiple of 10 in length
-returns or prints a list of integers based on the input list, but with items at positions which are a multiple of 2 or 3 removed

## Additional Reqs.
Host your program at a public git-based repository and include robust testing for your program.
*And here you are*

# Implementaions:
For challenge two, I've created a relevant directory 'challenge2' which contains `solution.js`. This file implements and exports a function `filterList` that meets all of the requiremnets presented above. It has a lot of logic checks in separate hoisted functions which it calls. The actual filtering logic is actually rather short and uses an Array.prototype.filter() to operate on each element of the inputList, checking any number of positive integer multiples.

Executing `node solution.js` will provide a simple run of the program for a valid list and multiples [2, 3]. 

# Testing
Executing `node test.js` which imports the module from solution.js will execute a number of tests per requirements to validate:
- That a basic example works
- Input array is in fact an array of integers.
- Input array's length is a multiple of 10

There are also additional checks for edge cases identified during development such as:
- Supplied multiplicands are in fact positive integers as well, or ar least floats that can be represented as integers i.e. 5.00