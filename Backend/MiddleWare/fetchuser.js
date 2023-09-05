const jwt = require("jsonwebtoken");
const SECRET_KEY = "Vv@9Sl¥4Jr£4Tq¥5-Cm¢1Zo4Pv£8Ei7";
const fetchuser = (req, res, next) => {
  const token = req.header("authtoken")
  if (!token) {
    res.status(401).send({ error: "No token found!!" });
  }
  try {
    const data = jwt.verify(token, SECRET_KEY);
    req.user = data.user; // sending the fetched user in the request
    next(); // this will run the function next to it. here it is the 'async (req,res)=>{..}'
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using a valid token 2" });
  }
};
module.exports = fetchuser;
