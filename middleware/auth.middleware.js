const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY;

const verifyToken = (req, res, next) => {
  // Retrieve the token from the request headers
  const authorizationHeader = req.headers.authorization;
  const token = authorizationHeader.replace("Bearer ", "");

  if (!token) {
    res.status(401).send("Access denied. Token missing.");
    return;
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    res.status(403).send("Invalid token.");
  }
};

module.exports = verifyToken;
