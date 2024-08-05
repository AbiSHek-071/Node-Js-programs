const fs = require("fs");
const readablesStream = fs.createReadStream("./file1.txt", {
    encoding: "utf-8",
    highWaterMark: 2,
});
const writableStream = fs.createWriteStream("./file2.txt");
readablesStream.on("data", (chunk) => {
    console.log(chunk);
    writableStream.write(chunk);
});
