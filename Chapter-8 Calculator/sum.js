const sumRequestHandler=(req,res)=>{
    const body = [];
    req.on('data', (chunk) => {
        body.push(chunk);
    });
    req.on('end', () => {
        res.setHeader('Content-Type', 'text/html');
        const fullBody = Buffer.concat(body).toString();
        const params = new URLSearchParams(fullBody);
        const first = Number(params.get('first'));
        const second = Number(params.get('second'));
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

module.exports=sumRequestHandler;
