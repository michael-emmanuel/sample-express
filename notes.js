let originalArray = [1, 2, 3];
let clonedArray = [...originalArray];

clonedArray[0] = 'one';
clonedArray[1] = 'two';
clonedArray[2] = 'three';

console.log(`originalArray: ${originalArray}, clonedArray: ${clonedArray}`);

// Spread operator allocates memory and keeps no reference to the original value

// TypeScript notes

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

// Unions are variable or parameters that can have more than one data type
// Ex: let stringOrNumberUnionType: string | number;
// Use unions sparingly and avoid use of unions when possible

// Object tyoe
// Avoid using the object type but instead create a custom type, which
// is reusable and avoids cluttering our code.

// Tuple Type
// let validTuple: [string, number] = ["bar", 1];
// let invalidTuple: [string, number] = [1, "bar"];

// any type
// AVOID using this. Using this type, in say a function, breaks the contract you
// specified in the function declaration
// When you use any type to define a contract, there essentially isn't one

// Void type
// This type is the opposite of any, indicates no type at all
// This example uses void to annotate the return value of a function that shouldn't have one
// function log(msg: string): void {
//   console.log(msg)
// }

// Custom Type
// type WeatherDetailType = {
//   weather: string;
//   zipcode: string;
//   temp?: number;
// }

// let weatherDetail: WeatherDetailType = {
//   weather: "sunny",
//   zipcode: "00000",
//   temp: 30
// }

// Rule of thumb, use an interface over type to define a new object or the method of an obj.
// As they provide more precise error messages.

// To use custom type universally, define them in a type declaration file, .d.ts extension

// Transpile TS to Ks then run
// npx tsc
// node index.js
