const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.download("./ify-epaphras.pdf");
});

app.listen(4000);