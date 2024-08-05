
//...............fs.promise.....................

const fs = require("fs").promises;
console.log("1");
async function a() {
    try {
        const data = await fs.readFile("./log.txt", "utf-8");
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}
console.log("2");
a();
console.log("3");
