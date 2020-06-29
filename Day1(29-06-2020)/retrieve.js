const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;
fs.readdir("C:\Users\Asus\Desktop\jrocks\src", (err, files) => {
  app.get("/data", (req, res) => {
    if (err) throw err;
    res.send(files);
  });
});
app.listen(port, () => {
  console.log(files);
});
