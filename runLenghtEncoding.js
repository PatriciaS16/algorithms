// ENCODING

function runEnconding (string) {
    // Initialize an empty array to store the encoded characters
    let encodedString = [];
    // Initialize a count variable to keep track of consecutive characters
    let count = 1;

    // Loop through each character in the input string
    for (let i = 0; i < string.length; i++) {

        // Check if the current character is the same as the next one
        if (string[i] === string[i + 1]) {

            // If yes increase the count of consecutive characters
            count++;
        } else {

            // If not push the count and character to the encoded string
            encodedString.push(count + string[i]);

            // Reset the count for the new character
            count = 1;
        }
    }

    // Join the encoded characters into a single string and return it
    return encodedString.join("");
}


let codeString = "AAAABBBCCDAA";
let resultString = runEnconding(codeString);

console.log("Encoded String:", resultString);


// DECODING


// Function to take a string 'str' as input and returns a decoded string
function runDecoding(str) {
    // Initialize an empty string to store the decoded output
    let result = '';

    // Loop through the string 'str' two characters at a time
    for (let i = 0; i < str.length; i += 2) {
        // Get the number of repetitions from str[i] 
        const count = parseInt(str.charAt(i));

        // Get the character to repeat from str[i + 1]
        const char = str.charAt(i +1);

        // Repeat 'char' 'count' times and add to 'result'
        for (let j = 0; j < count; j++) {
            result += char;
        }
    }

    // Return the decoded string
    return result;
}

let stringEncoded = "4A3B2C1D2A";
let stringDecoded = runDecoding(stringEncoded);
console.log("stringDecoded:", stringDecoded); // Output: AAAABBBCCDAA


// TESTS

// An empty string, which should return an empty string.
console.log("Encoding String:", runEnconding(""));

// A string with a single character, that should return just one <character>.
console.log("Encoding String:", runEnconding("A"));

// A string with non-consecutive repeating characters, like "acbcba", which should return 1a1c1b1c1b1a.
console.log("Encoding String:", runEnconding("acbca"));

// A string with special characters, like @##$$%, which should return 1@2#2$1%.
console.log("Encoding String:", runEnconding("@##$$%"));

// A string with spaces, like aa bbbcc, which should return 2a3 3b2c.
console.log("Encoding String:", runEnconding("aa bbbcc"));

// A string with uppercase and lowercase characters, like aAaBBb, which should return 1a1A1a2B1b.
console.log("Encoding String:", runEnconding("AaBBb"));


// An empty string, which should return an empty string.
console.log("Decoding String:", runDecoding(""));

// A string with a single character
console.log("Decoding String:", runDecoding("1A"));

// A string with non-consecutive repeating characters, like "1a1c1b1c1b1a", which should return acbcba.
console.log("Decoding String:", runDecoding("1a1c1b1c1b1a"));

// // A string with special characters, like 1@2#2$1%, which should return @##$$%.
console.log("Decoding String:", runDecoding("1@2#2$1%"));

// A string with spaces, like 2a3 3b2c, which should return aa bbbcc.
console.log("Decoding String:", runDecoding("2a3 3b2c"));

// A string with uppercase and lowercase characters, like 1a1A1a2B1b, which should return aAaBBb.
console.log("Decoding String:", runDecoding("1a1A1a2B1b"));
