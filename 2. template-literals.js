let first = "tal";
let last = "zach";
let id = 1;

// Before
let name = 'Your name is ' + first + ' ' + last + '.';
let url = 'http://localhost:3000/api/messages/' + id;

// After
let name = `Your name is ${first} ${last}.`;
let url = `http://localhost:3000/api/messages/${id}`;