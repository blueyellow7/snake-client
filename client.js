const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function () {
  // establish connection to server
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: NRB");

  /*Example of hard-coded "Move: up" signal to server:*/ 
    // for (let i = 1; i <= 5; i++) {
    //  setTimeout(() => { conn.write("Move: up") }, i * 50);
  });

  // interpret data coming from server as text
  conn.setEncoding("utf8");
  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = { connect };