const http=require('http');
const server=http.createServer((req,res)=>{
    console.log(`Let's learn backend`);
    return res.end();
});

server.listen((3000),()=>{
    console.log('Server is listening to the address http://localhost:3000');
})