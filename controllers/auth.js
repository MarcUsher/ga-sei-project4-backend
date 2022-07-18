// API's for User Registration and Authentication

const jwt = require ("jsonwebtoken");

// Import User Model
const User = require("../models/User");

// Require bCrypt
const bcrypt = require("bcrypt");
const { findOne } = require("../models/User");
const salt = 10;


// HTTP POST - Signup Route - To post/save the data

exports.auth_signup_post = (req, res) => {
  let user = new User(req.body);

//   console.log(req.body.password);
  // Hash the password
  let hashedPassword = bcrypt.hashSync(req.body.password, salt);
  console.log(hashedPassword);

  user.password = hashedPassword;

  user
    .save()
    .then(() => {
      res.json({"message": "User created Successfully!"})
    })
    .catch((err) => {
      console.log(err);
      res.json({"message": "Error creating user, please try again later!"});
    });
};


// HTTP POST - Signin Route - To post/authenticate the data


exports.auth_signin_post = async (req, res) => {
  let { emailAddress, password } = req.body;
  console.log("emailAddress", emailAddress)

  try{
    let user = await User.findOne({emailAddress});
    console.log("user", user)

    if(!user){
      return res.json({"message": "User not found"}).status(400);
    }

    const isMatch = await bcrypt.compareSync(password, user.password)
    console.log("password",password);
    console.log("user.password",user.password)

    if(!isMatch) {
      return res.json({"message": "Password doesn't match ! "}).status(400);
    }

    const payload = {
      user: {
        id: user._id,
        firstName : user.firstName,
      }
    }

    jwt.sign(
      payload,
      process.env.SECRET,
      { expiresIn: 360000000},
      (err, token) => {
        if(err) throw err;
        res.json({token}).status(200)
      }
    )
  }
  catch(error) {
    console.log(error);
    res.json({"message": "You are not logged in"})
  }
}

// HTTP POST - Logout Route - To post/authenticate the data

exports.auth_logout_get = (req, res) => {
  req.logout();
  req.flash("success", "You are successfully logged out!!");
  res.redirect("/auth/signin");
};


// HTTP GET - Getting the User profile

exports.auth_profile_get = (req, res) => {
  User.findById(req.query.id)
  .then(user => {
    res.json({user: user})
})
  .catch(error => {
    console.log(error)
})
}
