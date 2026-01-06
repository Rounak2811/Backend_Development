const requestHandler=(req,res)=>{
    if(req.url==='/'){
        res.setHeader('Content-Type','text/html');
        res.write(
        `<html>
            <head>
                <title>Calculator Project</title>
            </head>
            <body>
                <h1><center>Welcome To the Calculator Project</center></h1>
                <h2><a href="/calculator">Go To Calculator</a></h2>
            </body>
        </html>`
        );
        return res.end();
    }
    else if(req.url==='/calculator'){
        res.setHeader('Content-Type','text/html');
        res.write(
        `<html>
            <head>
                <title>Calculator Screen</title>
            </head>
            <body>
                <form action="/calculate-result" method="POST">
                    <label for="first">First Number:</label>
                    <input type="number" name="first" id="first">
                    <br><br>
                    <label for="second">Second Number:</label>
                    <input type="number" name="second" id="second">
                    <br><br>
                    <input type="submit" value="Sum">
                </form>
            </body>
            </html>`
        );
        return res.end();
    }
    else if(req.url==='/calculate-result' && req.method==='POST'){
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            res.setHeader('Content-Type', 'text/html');
            const fullBody = Buffer.concat(body).toString();
            const params = new URLSearchParams(fullBody);
            const first = Number(params.get('first')) || 0;
            const second = Number(params.get('second')) || 0;
            const sum = first + second;
            res.write(`
                <html>
                    <head><title>Result</title></head>
                    <body>
                        <h1>Result</h1>
                        <p>First: ${first}</p>
                        <p>Second: ${second}</p>
                        <h2>Sum: ${sum}</h2>
                        <a href="/calculator">Back</a>
                    </body>
                </html>
            `);
            return res.end();
        });
    }
}

module.exports=requestHandler;