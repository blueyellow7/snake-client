const { connect } = require('./client.js');
const { setupInput } = require('./input.js');

console.log('Connecting ...');

// call functions
let conn = connect();
setupInput(conn);

