const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My first web server</title></head>');
        res.write('<body><h2>Enter your details</h2>');
        res.write('<form action="/submit-user-data" method="POST">');
        res.write('Name: <input type="text" name="name"><br><br>');
        res.write('Age: <input type="number" name="age"><br><br>');
        res.write('<h3>Select your gender </h3>');
        res.write('<input type="radio" name="gender" value="male"> Male<br>');
        res.write('<input type="radio" name="gender" value="female"> Female<br>');
        res.write('<input type="submit" value="Submit">');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if (req.url === '/submit-user-data' && req.method === 'POST') {
        fs.writeFileSync('output', 'Rounak is learning backend');
        res.statusCode = 302;//redirecting it another site
        res.setHeader('Location','/');
        return res.end();

    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first web server</title></head>');
    res.write('<body><h2>My name is Rounak and I am learning backend</h2></body>');
    res.write('</html>');
    res.end();
});
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server listening to the address http://localhost:${PORT}`);
});