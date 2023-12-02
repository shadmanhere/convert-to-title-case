const toTitleCase = require('./index');

const inputString = 'hello world';
const titleCasedString = toTitleCase(inputString);

console.log(`Original: ${inputString}`);
console.log(`Title Case: ${titleCasedString}`);
