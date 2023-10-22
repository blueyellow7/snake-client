const { MOVE_KEYS, MESSAGES } = require('./constants');

// connect function from client.js returns 'conn' object which establishes connection with server.
// pass 'conn' to setUpInput and set as variable called 'connection'.
// make connection into a global variable.
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  // allow for exiting the game (\u0003 = ctrl + c)
  if (key === '\u0003') {
    process.exit();
  }

  const moveKeysArray = ['w', 'a', 's', 'd'];
  if (moveKeysArray.includes(key)) {
    connection.write(MOVE_KEYS[key]);
  }

  const messageKeysArray = ['1', '2', '3', '4'];
  if (messageKeysArray.includes(key)) {
    connection.write(MESSAGES[key]);
  }
};

module.exports = { setupInput };