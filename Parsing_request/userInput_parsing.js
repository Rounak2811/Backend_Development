
const fs = require('fs');
const requestHandler=((req, res) => {
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
        const body=[];
        //anything related to request is being performed at server side : 
        req.on('data',(chunk)=>{//whenever you receives the data do this :
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end',()=>{//on completion of data sending , do this :
            const fullBody=Buffer.concat(body).toString();
            console.log(fullBody);
            const params=new URLSearchParams(fullBody);
            // const bodyObject={};
            // for( const [key,val] of params.entries()){
            //     bodyObject[key]=val;
            // }
            const bodyObject=Object.fromEntries(params);
            fs.writeFileSync('output.txt',JSON.stringify(bodyObject));
            console.log(bodyObject);
        })
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

module.exports = requestHandler;
