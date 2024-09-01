const express = require("express");
const bodyparser = require("body-parser");
const port = 5000;
const server = express();
server.use(bodyparser.json());

let posts = [
  {
    title: "Nirvan Node",
    contents: "Nirvan is learning node at 5am in morning",
  },
  {
    title: "Chalapati Node",
    contents: "Chalapati is learning node at 5am in morning but he comes late",
  },
  {
    title: "Umang Node",
    contents: "Umang was sleeping",
  },
];

server.listen(port, () => {
  console.log(`server has started at port ${port}`);
});

const postRoutes = require("./routes");
postRoutes(server);
