const ws = require('ws');

const port = 3000;
const wss = new ws.Server({ port });

wss.on("listening", () => {
    console.log(`Server is listening on port: ${port}`);
});

wss.on("connection", (client) => {
    console.log("Client connected");

    client.on("message", (data) => {
        console.log(data.toString());
        wss.clients.forEach((client) => {
            client.send(data.toString());
        }); 
    });
});