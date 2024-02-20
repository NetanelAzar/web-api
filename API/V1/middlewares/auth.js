const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const arr = authHeader.split(" ");
    const token = arr[1];
    const user = jwt.verify(token, process.env.PRIVATE_KEY);
    req.user = user;
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ msg: "Unauthorized" });
  }
};
