// file of constant variables that other files in snake-client will use

const IP = '192.168.2.32';
const PORT = 50541;
const MOVE_KEYS = {
  'w': 'Move: up',
  'a': 'Move: left',
  's': 'Move: down',
  'd': 'Move: right',
};
const MESSAGES = {
  '1': 'Say: thats hissterical!',
  '2': 'Say: oh goodness snake!',
  '3': 'Say: /slithers away/',
  '4': 'Say: :)))',
};

module.exports = {
  IP,
  PORT,
  MOVE_KEYS,
  MESSAGES
};
