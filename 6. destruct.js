

import {port, getAccounts} from 'module';


const user = {
    id: 339,
    name: 'Fred',
    age: 42
};
const { name : name } = user;
const { name } = user; // same
console.log(name); //prints: Fred

let r = {
  name
}; 
console.log(r.name); //prints: Fred




///
/// Different var name
///
const user = {
    id: 339,
    name: 'Fred',
    age: 42
};
const {name: callSign} = user;
console.log(callSign); //prints: Fred




///
/// Nested
///
const user = {
    id: 339,
    name: 'Fred',
    age: 42,
    education: {
      degree: 'Masters'
    }
};
const degree = user.education.degree; // Before
const {education: {degree}} = user; // After
console.log(degree); //prints: Masters





///
/// Arrays
///
const address = [221, 'Baker Street', 'London'];
const [ houseNo, , city ] = address;
console.log(houseNo, city); // 221 'London'




///
/// Destruct params
///
let t = { name: 'John', age: 25 };
myFunc(t);

// Before
function myFunc(opts) {
    var name = opts.name;
    var age = opts.age;
}

// After
function myFunc({name, age}) {

}