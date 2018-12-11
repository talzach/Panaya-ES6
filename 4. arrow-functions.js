
//
// Callbacks
//

// Exception - Button is 'this'
$('.btn').click(function(event){
  this.sendData()
});

// Before
var _this = this;
$('.btn').click(function(event){
  _this.sendData()
});

// After - Outer scope is 'this'
$('.btn').click((event) => {
  this.sendData()
});

// No brackets with one arg + one statement
$('.btn').click(event => this.sendData());




//
// No return - Single line expression
//

// Before
var ids = ['1','2'];
var messages = ids.map(function (value) {
  return "ID is " + value // explicit return
});

// After
var messages = ids.map(value => `ID is ${value}`); // implicit return