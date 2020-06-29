const fs = require("fs");
var dt = new Date();
var utcDate = dt.toUTCString();
fs.writeFile("date_time.txt",utcDate,(err)=>{
    if (err) throw err;
    console.log(utcDate);
});

//output:Tue, 30 Jun 2020 00:27:18 GMT
