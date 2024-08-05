const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.get("/products/:catogory", (req, res) => {
    const { catogory } = req.params;
    if (catogory === "mobile") {
        res.send("this is mobile page");
    } else if (catogory === "laptop") {
        res.send("this is the laptop page");
    } else {
        res.send("other products ");
    }
});

app.listen(port, () => {
    console.log("running on port ", port);
});
