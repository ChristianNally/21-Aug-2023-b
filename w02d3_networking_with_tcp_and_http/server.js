const net = require('net');
const port = 8005;

const connectedClients = [];

const server = net.createServer();

server.on('connection', (client) => {
    connectedClients.push(client);
    client.setEncoding('utf8');
    console.log(`client is connected`);
    // console.log(`client=`, client);

    client.write(`Welcome to my awesome server! ⛵`);

    client.on('data', (message) => {
        console.log('client says: ', message);

        if (message.startsWith('setName ')){
            let clientName = message.replace(/setName /, '');
            clientName = clientName.replace(/^\s+|\s+$/g, '');
            console.log('setting client name to=', clientName);
            client.name = clientName;
            return;
        }

        connectedClients.forEach((eachClient) => {
            if (eachClient !== client){
                const outGoingMessage = `${client.name} > ${message}`;
                eachClient.write(outGoingMessage);                    
            }
        });

    });

});

server.listen(port, () => {
    console.log(`Server is listening on port=${port}`);
});

