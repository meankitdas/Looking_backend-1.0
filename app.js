const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const postsRoute = require("./routes/posts");

const bodyParser = require("body-parser");

app.use(bodyParser.json());


require("dotenv/config");

app.use("/user", postsRoute);

app.get("/", (req, res) => res.send("Server is running !"));

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Succesfully connected to DB");
  }
);


app.listen(port, () => console.log(`LOOKING DB listening on port http://localhost:${port}`));
