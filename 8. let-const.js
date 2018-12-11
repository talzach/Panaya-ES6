
//
// Same in global scope
//
let me = 'go';  // globally scoped
var i = 'able'; // globally scoped

// global variables defined with let will not be added as properties on the global window object
console.log(window.me); // undefined
console.log(window.i); // 'able'




//
// Same in function scope
//
function tt() {
    let terOfRecommendation = 'awesome worker!'; //function block scoped
    var sityCheerleading = 'go!'; //function block scoped
}




//
// Different in block scope
//
function let1() {
    //i is *not* visible out here

    for(let i = 0; i < 5; i++) {
        //i is only visible in here (and in the for() parentheses)
        //and there is a separate i variable for each iteration of the loop
    }

    //i is *not* visible out here
}

function var1() {
    //i *is* visible out here

    for(var i = 0; i < 5; i++) {
        //i is visible to the whole function
    }

    //i *is* visible out here
}



///
/// Solves closure problem
///

for(var i = 1; i <= 5; i++) {
    setTimeout(function() {
        console.log('Value of i : ' + i); 
    },100);
} 
// Output:
// Value of i : 6
// Value of i : 6
// Value of i : 6
// Value of i : 6
// Value of i : 6

// To fix the issue in ES5, we used Immediately Invoked Function Expression (IIFE) to capture the state of variable
for(var i = 1; i <= 5; i++) {
 
    (function(i){
         setTimeout(function(){
           console.log('Value of i : ' + i);
        },100);
     })(i);
  } 
//   Output:
//   Value of i : 1
//   Value of i : 2
//   Value of i : 3
//   Value of i : 4
//   Value of i : 5

// Let
for(let i = 1; i <= 5; i++) {
   
    setTimeout(function(){
        console.log('Value of i : ' + i);
    },100);
 }
//  Output:
//  Value of i : 1
//  Value of i : 2
//  Value of i : 3
//  Value of i : 4
//  Value of i : 5





//
// Re-declare the same variable in the same scope
//
{
    'use strict';
    // let me = 'foo';
    let me = 'bar'; // SyntaxError: Identifier 'me' has already been declared
    me = "tt";

    const t = 'f';
    t = 'f'; // Exception
}

{
    'use strict';
    var me = 'foo';
    var me = 'bar'; // No problem, `me` is replaced.
}