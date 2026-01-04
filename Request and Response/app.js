const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My first web server</title></head>');
        res.write('<body><h2>Welcome Home</h2></body>');
        res.write('</html>');
        return res.end();
    }
    else if(req.url==='/products'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My first web server</title></head>');
        res.write('<body><h2>Checkout our products</h2></body>');
        res.write('</html>');
        return res.end();
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My first web server</title></head>');
    res.write('<body><h2>My name is Rounak and I am learning backend</h2></body>');
    res.write('</html>');
    res.end();
});
const PORT=3000;
server.listen(PORT,()=>{
    console.log(`Server listening to the address http://localhost:${PORT}`);
});