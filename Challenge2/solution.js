// Solution for something that is totally not fizzbuzz.

/* Functionality
*   - Accept a list of integers (any length)
*   - Emit an error message if the list length is not a multiple of 10
*   !! Also added type checks for numeric data on inputs. Hope that's okay. Easy to remove if not.
*   - Returns/prints a list of integers, with:
        - items at positions which are a multiple of 2 or 3 removed.
*/

/* Assumptions
*   - List positions start from zero
*   - Any real/rational number is acceptable in the input list
*   - multiples must be real and > 0
*/

// const input = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
// const mults = [2, 3]
// console.log("INPUT ", input, "\ninput length: ", input.length, "\nmults: ", mults)
// filterList(input, mults)


// Skipping numbers in position multiples of ['x1, x2, xn']
function filterList(given, mults) {
    // Safechecks
        // Make sure to check that it's actually a valid list of numbers
        // console.debug(' INPUT: ', given, '\n')

        // Separate functions for now. Just looks nice imo
        const isValidLength = validateInputLength(given)
        const isValidData   = validateInputData(given)
        const isValidMults  = validateMults(mults)


        if (!isValidLength) {
            console.error("ERROR::input_length; Array with length that is multiple of 10 required")
            return -1;
        }
        if (!isValidData) {
            console.error("ERROR::input_type; Input must be integers")
            return -1;
        }
        if (!isValidMults) {
            console.error("ERROR::input_type; Multiples must be positive integer array")
            return -1;
        }

        else { // Do the thing
            // creates a shallow copy of given array, filtered for elements that pass the test in arrow fuinction
            const output = given.filter((_, index) => { // omit callback (_)...one-liner returned instead
                // Include position 0, and return elements NOT at bad multiples
                return index === 0 || mults.every(multiple => index % multiple !== 0);
            });
            // as requested
            console.log(' OUTPUT: ', output, '\n')
            
            return output
        }
}

function validateInputLength(input) {
    // console.debug("VALIDATION::Length is ", input.length)
    return (
        input.length % 10 == 0 
    );
}

function validateInputData(input) {
    return (
        Array.isArray(input) && 
        input.every(element => Number.isInteger(element))
    );
}

// typecheck multiple array (extra sauce) 
function validateMults(mults) {
   return (
        Array.isArray(mults) && 
        mults.every(element => Number.isInteger(element) && element > 0)
   );
}

module.exports = { filterList };