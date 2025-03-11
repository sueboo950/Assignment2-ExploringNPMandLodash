// Import Lodash
const _ = require('lodash');

// Example for _.uniq
const uniqExample = _.uniq([2, 1, 2, 3, 4, 3]);
console.log('Unique elements:', uniqExample); // Output: [2, 1, 3, 4]

// Example for _.merge
const object = { 'a': [{ 'b': 2 }, { 'd': 4 }] };
const other = { 'a': [{ 'c': 3 }, { 'e': 5 }] };
const mergeExample = _.merge(object, other);
console.log('Merged object:', mergeExample);
// Output: { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }

// Example for _.debounce
const saveInput = () => {
    console.log('Saving data...');
};

const processChange = _.debounce(saveInput, 2000);

// Simulate user input
processChange(); // Will execute saveInput function after 2000ms

// Simulate a second input before the debounce delay
setTimeout(processChange, 1000); // Will restart the debounce delay
