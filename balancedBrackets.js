function validParentheses(s) {

    //Initialize empty array to serve as stack
    let stack = [];

    // Loop through every each character in the string
    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        // If the character is an opening bracket, push it onto the stack
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {

            // If the character is a closing bracket
            // Check if the stack is empty (no matching opening bracket)
            if (stack.length === 0) {
                return false; // There's no matching opening bracket for this closing bracket
            }

            // Pop the last element from the stack
            let lastOpenBrack = stack.pop();

            // Check if the popped opening bracket matches the current closing bracket
            if (
                (lastOpenBrack === '(' && char !== ')') ||
                (lastOpenBrack === '{' && char !== '}') ||
                (lastOpenBrack === '[' && char !== ']') 
            ) {
                return false; // Opening and closing brackets don't match
            }

        }
    }

    // After looping through all characters, if the stack is empty, return true
    // This means all opening brackets had matching closing brackets
    return stack.length === 0;
}

// Testing function

console.log(validParentheses("([])")); // true
console.log(validParentheses("([)]")); // false
console.log(validParentheses("((()")); // false
console.log(validParentheses("()")); // true
console.log(validParentheses("{[()]}")); // true
console.log(validParentheses("{[()]")); // false
console.log(validParentheses("{[()]}}")); // false
console.log(validParentheses("{[()")); // false