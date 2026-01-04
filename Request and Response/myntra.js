const http = require('http');
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    if (req.url === '/' || req.url === '/home') {
        //home :
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Assignment-1 Node.js</title></head>');
        res.write('<body><h2>Enter your details</h2>');
        res.write('<h1><center>Welcome to Myntra Online Shopping</center></h1>');
        res.write('<h3>Find Below the navigation link to your Page</h3>');
        res.write('<h4><a href="/home">Home</a></h4>');
        res.write('<h4><a href="/men">Men</a></h4>');
        res.write('<h4><a href="/women">Women</a></h4>');
        res.write('<h4><a href="/kids">Kids</a></h4>');
        res.write('<h4><a href="/cart">Cart</a></h4>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    else if (req.url === '/men') {
        res.write('<h2>Welcome to the Men\'s collection</h2>');
        return res.end();
    }
    else if (req.url === '/women') {
        res.write('<h2>Welcome to the Women\'s collection</h2>');
        return res.end();
    }
    else if (req.url === '/kids') {
        res.write('<h2>Welcome to the kid\'s collection</h2>');
        return res.end();
    }
    else if (req.url === '/cart') {
        res.write('<h2>Welcome to your cart</h2>');
        return res.end();
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:3000`);
})