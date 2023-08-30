const net = require('net');
const port = 8005;

const client = net.createConnection({
    port: port,
    host: 'localhost'
});

process.stdin.on('data', (message) => {
    client.write(message);
});

client.setEncoding('utf8');

client.on('connect', () => {
    console.log('client is connected to the server.');
});

client.on('data', (message) => {
    console.log(`${message}`);
});

client.on('end', () => {
    console.log('client is disconnected from the server');
});