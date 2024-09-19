const express = require("express");
const jwt = require("jsonwebtoken");
const { signupschemas } = require("./db");

const app = express();

const secretKey = "secretkey";

app.use(express.json());

const port = 4000;

app.get("/", (req, res) => {
  res.json("you got the app or not");
});

app.post("/login", async (req, res) => {
  const data = req.body;
  const user = await signupschemas.findOne({ Email: data.email });

  console.log("error 0.1");
  const token = jwt.sign({ user }, secretKey, { expiresIn: "100000 " });
  res.json.apply;
});

// console.log("error is 4");
app.post("/profile", verifyToken, (req, res) => {
  console.log("error0");
  const data = jwt.verify(req.token, secretKey, (err, authData) => {
    console.log("error 1");
    if (err) {
      console.log("error 2");
      res.send({ result: "Invalid Token" });
      console.log("error 3");
    } else {
      res.json({ msg: "sending from elese", authData });
    }
  });
});

async function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const token = bearer[1];
    const data = jwt.verify(token, secretKey);
    const user = await signupschemas.findOne({ email: data.email });
    if (!user) {
      throw new Error();
    }
    req.token = token;
    next();
  } else {
    res.send({ result: "token is not valid" });
  }
}

app.listen(port);
console.log("app is running on port 4000");
