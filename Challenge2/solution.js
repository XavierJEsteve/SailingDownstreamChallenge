// Soluition for something that is totally not fizzbuzz.

/* Functionality
*   - Accept a list of integers (any length)
*   - Emit an error message if the list length is not a multiple of 10
*   - Returns/prints a list of integers, with:
        - items at positions which are a multiple of 2 or 3 removed.
*/

/* Assumptions
*   - List positions start from zero
*   - Any real/rational number is acceptable
*/

allTests()

// Skipping numbers in position multiples of ['x1, x2, xn']
function filterList(given, badMults) {
    // Safechecks
        // Make sure to check that it's actually a valid list of numbers
        const isValid = validateInput(given)

        if (!isValid) {
            console.error("ERROR::input:: Array<number> required with length a multiple of 10 required")
            return 1;
        }
        else {            // Do the thing
            console.debug(' INPUT: ', given, '\n')
            // boring...
            // for (let i = 0; i < given.length; i++ ) {
            // }

            // creates a shallow copy of given array, filtered for elements that pass the test in arrow fuinction
            const output = given.filter((_, index) => { // omit callback (_)...one-liner returned instead
                // Include position 0, and return elements NOT at bad multiples
                return index === 0 || badMults.every(multiple => index % multiple !== 0);
            });
            console.log(' OUTPUT: ', output, '\n')
            return output
        }
}

function validateInput(input) {
    return (
        Array.isArray(input) && input.every(element => typeof element === 'number') && ( input.length % 10 === 0 )
    );
}

/* Testing  
*/
function allTests(test_optional) {
    const pass = 0
    const fail = 1

    const test_sanity   = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const test_length   = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]
    const test_numeric     = ['l', 'z', 'e', 4, 5, 'G', 7, 8, 9, 'O']
    const excluded      = [2, 3]

    // pass == 0, fail == 1
    console.assert(
        !filterList(test_sanity, excluded) ,
        "TEST 1: Sanity check"
    )

    // console.assert(
    //     filterList(test_length, excluded),
    //     "TEST 2: Non multiple of 10"
    // )

    // console.assert(
    //     filterList(test_numeric, excluded),
    //     "TEST 3: Array & Numeric data check"
    // )
}