
const sumRequestHandler=require('./sum');

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
        sumRequestHandler(req,res);
    }
}

module.exports=requestHandler;