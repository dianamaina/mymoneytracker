const express = require("express");
const mongoose = require("mongoose");
const app = express();


const PORT = process.env.PORT || 3000;

const db = require ("./models");

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/budget", {

  useNewUrlParser: true,
  useUnifiedTopology: true;
  useCreateIndex: true;
useFindAndModify: false });

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose successully connected.");
});

connection.on("error", (err) => {
  console.log("Mongoose sucessfully connected.");
});
 
app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

app.get("/api/transactions", (req, res)) =>{
  db.transactions.find({}).then((foundtransaction) =>{
    res.json (foundtransaction);
  }).catch(err => {
    console.log(err);
    res.json ({
      error: true,
      data: null,
      message: "failed to retreive transaction"
    });
  

app.post("/api/transactions", (req,res) => {
  db.transactions.creatr(req, body);
});

app.use(logger("dev"));

 app.use(compression());
 app.use(express.urlencoded({ extended: true }));
 app.use(express.json());

 app.use(express.static("public"));


// routes
 app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on http://localhost${PORT}`);
});