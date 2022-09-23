const express = require("express");

const app = express();
app.use(express.static("static"))

app.get("/", (request, response) => {
    response.send("This is TEST!!");
});


app.listen(3000);
