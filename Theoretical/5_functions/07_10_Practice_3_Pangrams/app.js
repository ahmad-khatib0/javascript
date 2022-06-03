// A pangram is a sentence that contains every letter of the alphabet, like:
//"The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet.  Make sure you igore string casing!

// isPangram('The five boxing wizards jump quickly') //true
// isPangram('The five boxing wizards jump quick') //false

// function isPangram(array) {
//     let lowerCased = array.toLowerCase();
//     for (let character of 'abcdefghijklmnopqrstuwxyz') {
//         if (lowerCased.indexOf(character) === -1) {
//             return false;

//         }
//     }
//     return true;
//     //If we make it all the way here it means every character was found as soon as one character is not found.
//     //  We return false.
// }


function isPangram(array) {
    let lowerCased = array.toLowerCase();
    for (let character of 'abcdefghijklmnopqrstuwxyz') {
        if (!lowerCased.includes(character)) {
            return false;

        }
    }
    return true;
}