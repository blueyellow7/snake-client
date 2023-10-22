const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: NRB");

    /*Example of hard-coded "Move: up" message to server:*/ 
    // for (let i = 1; i <= 5; i++) {
    //  setTimeout(() => { conn.write("Move: up") }, i * 50);
  });
  
  conn.setEncoding("utf8");
  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = { connect };