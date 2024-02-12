let originalArray = [1, 2, 3];
let clonedArray = [...originalArray];

clonedArray[0] = 'one';
clonedArray[1] = 'two';
clonedArray[2] = 'three';

console.log(`originalArray: ${originalArray}, clonedArray: ${clonedArray}`);

// Spread operator allocates memory and keeps no reference to the original value

// npm install --save-dev typescript
// install ts as development dependencies

// npx tsc -init
// creates a tsconfig.json file

// Doing this is Over typing
// let weather: string = "sunny";

// instead let typescript infer the type
// let weather = "sunny";

// Declaring a Return Value
// function getWeather(): string {
//   const weather = "sunny";
//   return weather;
// }

// Essential to annotate the parameters of a function, bc TS doesn't have
// enough information to infer function parameters in most cases
// const weather = "sunny";
// function getWeather(weather: string): string {
// return weather;
// };
// getWeather(weather)

// Good typescript code avoids noise and relies on inferring type annotations.

// Important TypeScript types:
// unions, tuples, any, void
