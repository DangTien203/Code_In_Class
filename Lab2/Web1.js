const port = 3000;

const http = require('http');

const server = http.createServer( (req, res) => {
    res.write("hello World");
    res.write("I am Tien");
    res.write("Today is 20/3");
    res.write("2:17");
} );

server.listen(port, () => {
    console.log("http://localhost:" + port);
});