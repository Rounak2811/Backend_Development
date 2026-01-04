const http = require('http');
const userRequestHandler=require('./userInput_parsing');
const server = http.createServer(userRequestHandler);

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server listening to the address http://localhost:${PORT}`);
});