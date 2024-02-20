require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
mongoose.pluralize(null);
const app = express();
const MongoStore = require("connect-mongo");
const session = require("express-session");
const mysql = require("mysql");
const proRoute = require("./API/V1/routes/product");
const catRoute = require("./API/V1/routes/category");
const userRoute = require("./API/V1/routes/user");

const ipArr = [
  "127.0.0.1",
  "192.168.8.1",
  "::1",
  "192.168.10.30",
  "192.168.1.1",
];

// התחברות למסד הנתונים
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "1234",
  database: "ecommerce",
});
connection.connect(() => {
  console.log("Connected to MySQL");
});
///יצירת משתנה גלובלי בשם דיבי שמחזיק את הקונקשיין
global.db = connection;

//התחברות למסד נתונים
const ConnStr = process.env.MONGO_CONN;
console.log(ConnStr);
mongoose.connect(ConnStr + "DataBaseStore").then((status) => {
  if (status) console.log("Connected to MongoDB");
  else console.log("Not Connected to MongoDB");
});
//
app.use((req, res, next) => {
  console.log(req.ip);
  let i;
  for (i = 0; i < ipArr.length; i++) if (ipArr[i] == req.ip) break;
  if (i == ipArr.length - 1) return res.status(403).json({ msg: "not" });
  else next();
});

app.use(morgan("dev"));
app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded());
const twentyMin = 1000 * 60 * 20;
app.use(
  session({
    secret: "netanelazar",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: twentyMin },
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_CONN + "SessionDb",
    }),
  })
);

app.use("/product", proRoute);
app.use("/category", catRoute);
app.use("/user", userRoute);

app.all("*", (req, res) => {
  return res.status(404).json({ msg: "404" });
});

module.exports = app;
