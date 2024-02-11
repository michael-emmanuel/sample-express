let originalArray = [1, 2, 3];
let clonedArray = [...originalArray];

clonedArray[0] = 'one';
clonedArray[1] = 'two';
clonedArray[2] = 'three';

console.log(`originalArray: ${originalArray}, clonedArray: ${clonedArray}`);

// Spread operator allocates memory and keeps no reference to the original value
