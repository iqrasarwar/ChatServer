const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;
const userRoutes = require("./routes/userRoutes")
const generateToken = require("./config/generateToken")
const app = express();
dotenv.config();
connectDB();
app.use(express.json());
app.listen(PORT, console.log("hello using env"));

app.get("/", (req, res) => {
  res.send("api running");
});

app.get("/api/chats", (req, res) => {
  res.send(chats);
});

app.get("/api/chats/:id", (req, res) => {
  console.log(req.params.id);
});

app.use("/api/user",userRoutes);
