const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) =>
  res.send(
   "Welcome to simple nodejs  Web application, cd is based on Argo and cd is on github actions "
  )
);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
