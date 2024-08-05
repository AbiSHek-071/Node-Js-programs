const http = require("http");
const myServer = http.createServer((req, res) => {
    const obj = {
        name: "abhishek",
        age: 20,
    };
    res.writeHead(200, { "Content-Type": "application/JSON" });
    res.end(JSON.stringify(obj));
});
myServer.listen(3000);


