const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) =>
  res.send(
   "Hello Hi, Welcome to simple nodejs  Web application, cd is based on Argo and ci is on github actions .... DEPLOYED ON kubernetes local cluster  "
  )
);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
