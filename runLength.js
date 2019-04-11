/*
Run Length Encoding
Given an input string, write a function that returns the Run Length Encoded string for the input string.
For example, if the input string is “wwwwaaadexxxxxx”, then the function should return “w4a3d1e1x6”.
Time: O(n)
*/
function runLength(str) {
    let count = 1;
    let result = '';

    for(let i = 0; i < str.length; i++) {
        if(str[i] === str[i + 1]) {
            count++
        } else {
            result += `${str[i]}${count}`;
            // Reset values
            count = 1;
        }
    }
    return result;
}

str = "wwwwaaadexxxxxx"; // w4a3d1e1x6
console.log(runLength(str));
