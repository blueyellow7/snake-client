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
  if (key === '\u0003') {
    process.exit();
  }

  if (key === 'w') {
    keyCommand = 'Move: up';
    connection.write(keyCommand);
  }

  if (key === 'a') {
    keyCommand = 'Move: left';
    connection.write(keyCommand);
  }

  if (key === 's') {
    keyCommand = 'Move: down';
    connection.write(keyCommand);
  }

  if (key === 'd') {
    keyCommand = 'Move: right';
    connection.write(keyCommand);
  }
};

module.exports = { setupInput };