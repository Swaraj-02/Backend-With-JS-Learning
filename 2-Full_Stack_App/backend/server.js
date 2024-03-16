/* - Create this backend with Module (JS) using import startment 
        -> when use module js then in package.json need to define "type": "Module";
   - If you use Common (JS) then require() method is compolsory
*/

import express from "express";
import "dotenv/config";

const app = express();

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Server is working....");
});

app.get("/api/joke", (req, res) => {
  const joke = [
    {
      id: 1,
      title: "first joke",
      content: "This the joke number ONE",
    },
    {
      id: 2,
      title: "second joke",
      content: "This the joke number Second",
    },
    {
      id: 3,
      title: "thired joke",
      content: "This the joke number THIRED",
    },
    {
      id: 4,
      title: "fourth joke",
      content: "This the joke number FOURTH",
    },
    {
      id: 5,
      title: "fifth joke",
      content: "This the joke number FIFTH",
    },
  ];

  res.send(joke);
});

app.listen(port, () => {
  console.log(`Server is on localhost:${port}`);
});
