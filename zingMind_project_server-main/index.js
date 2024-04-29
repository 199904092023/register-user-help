const express = require("express");
const { client } = require("./dbConnet.js");
const authrouter = require("./router/authrouter.js");
const uploadrouter = require("./router/uploadrouter.js");
const findApplicant = require("./router/findApplicantrouter.js");
const dotenv = require("dotenv");
const cors = require('cors');
dotenv.config('./.env');
const morgan = require('morgan');

const app = express();

app.use(express.json());
app.use(morgan('common'));
dotenv.config("./.env");

app.use(cors({
  Credential: true,
  origin: 'http://localhost:3000'
}))
app.get("/", (req, res) => {
  res.send("Hello from server");
});

client;

app.use("/auth", authrouter);
app.use("/upload", uploadrouter);
app.use("/find", findApplicant);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("listening to port ", PORT);
});
