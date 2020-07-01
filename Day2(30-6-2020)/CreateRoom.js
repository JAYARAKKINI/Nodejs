const http = require("http");
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const port = 3000;
app.use(bodyparser.json());
const Room = [];
const Customerdetails = [];
app.post("/Room", (req, res) => {
  Room.push(req.body);
  console.log("Room created");
  res.json({ message: "Roomdetails created" });
});
app.post("/Customerdetails", (req, res) => {
  Customerdetails.push(req.body);
  console.log("customerdetails created");
  res.json({ message: "customerdetails" });
});
app.get("/bookRoom", (req, res) => {
  let room = Customerdetails.map((data) => {
    return {
      CustomerName: data.CustomerName,
      Date: data.Date,
      StartTime: data.StartTime,
      EndTime: data.EndTime,
      BookStatus: data.BookStatus,
      RoomId: data.RoomId,
    };
  });
  res.json(room);
});
app.get("/bookCustomers", (req, res) => {
  let customer = Customerdetails.map((data) => {
    return {
      CustomerName: data.CustomerName,
      RoomId: data.RoomId,
    };
  });
  res.json(customer);
});
app.listen(process.env.PORT || port, () => {
  console.log(`the server is listening ${port}`);
});
