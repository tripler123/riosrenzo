const express = require("express");

const app = express();
app.set("port", process.env.PORT || 3000);

app.get("/", (req, res) => {
  res.send({
    mensaje: "Hola Papu"
  });
});

//start the server
const server = app.listen(app.get("port"), (req, res) => {
    console.log("Server on port: ", `http://localhost:${app.get("port")} `);
  });
  