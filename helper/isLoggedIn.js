
// Middle Ware to validate JWT token

const jwt = require("jsonwebtoken");

require("dotenv").config();

module.exports = (req, res, next) => {

    var token ="";
    var authorizationToken = req.header("Authorization");
    console.log("authorizationToken", authorizationToken)

    if(authorizationToken){
        authorizationToken = authorizationToken.replace("Bearer ", "");
        console.log("authorizationToken", authorizationToken);
        token = authorizationToken
    }

    if(!token){
        return res.json({"message": "You're not allowed to do this !"}).status(401);
    }

    try{
        const decoded = jwt.verify(token, process.env.SECRET);
        req.user = decoded.user;
        next();
    }
    catch(error){
        return res.json({"message": "Your token is invalid"}).status(401)
    }
} 