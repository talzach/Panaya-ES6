// https://codeburst.io/a-simple-guide-to-destructuring-and-es6-spread-operator-e02212af5831


//
// Chars
//
const codeburst = 'CODEBURST';
const characters = [ ...codeburst ];
// [ 'C', 'O', 'D', 'E', 'B', 'U', 'R', 'S', 'T' ]



//
// Strings
//
const items = ['This', 'is', 'a', 'sentence'];
console.log(items) // Line 1
console.log(...items) // Line 2
// [ 'This', 'is', 'a', 'sentence' ] // Output 1
// This is a sentence // Output 2




//
// Max
//
Math.max(5, 6, 8, 9, 11, 999);

const numbers = [5, 6, 8, 9, 11, 999];
Math.max(...numbers);




//
// Objects - the key-value pairs are copied together instead of just values
//
const obj = { name: 'Foo', age: 22 };
const newObj = { ...obj }
console.log(newObj)
// { name: 'Foo', age: 22 }




///
/// Combine two objects
///
const obj1 = { firstName: 'Foo', age: 22 };
const obj2 = { lastName: 'Bar', gender: 'M' };
const newObj = { ...obj1, ...obj2, planet: 'Earth', firstName: 'tal' };
console.log(newObj)
// { firstName: 'Foo', age: 22, lastName: 'Bar', gender: 'M', planet: 'Earth' }




///
/// Rest operator
///
const numbers = [1, 2, 3, 4];
const [ firstNumber, ...restOfTheNumbers, last ] = numbers;
console.log(firstNumber, restOfTheNumbers); // 1 [ 2, 3 ] 4


function myFunc(...opts) {
    let t = opts[0];
}

// Show reducer
// https://redux.js.org/recipes/usingobjectspreadoperator