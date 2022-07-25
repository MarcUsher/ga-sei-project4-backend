// API's for User Registration and Authentication

const jwt = require ("jsonwebtoken");

// Import User Model
const User = require("../models/User");

// Require bCrypt
const bcrypt = require("bcrypt");
const { findOne } = require("../models/User");
const salt = 10;





// API ROUTES


// HTTP POST - Signup Route - To post/save the data
exports.auth_signup_post = (req, res) => {
  console.log("req.body", req.body)
  let user = new User(req.body);

  // Hash the password
  let hashedPassword = bcrypt.hashSync(req.body.password, salt);
  console.log(hashedPassword);

  user.password = hashedPassword;

  if (req.file) {
    user.profileImage = req.file.path
  } else {
    user.profileImage = null
  };  

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


exports.user_update_put = (req, res) => {
  console.log("req.body", req.body)
  User.findById(req.body.id)
  .then((user) => {
      console.log("USER", user)
      console.log("req.body", req.body)

      currentUser = user

      console.log("currentUser", currentUser)

      if (req.file) {
        currentUser.profileImage = req.file.path
      } else if (currentUser.profileImage) {
        currentUser.profileImage = currentUser.profileImage
      } else {
        currentUser.profileImage = null
      }

      currentUser.firstName = req.body.firstName
      currentUser.lastName = req.body.lastName
      currentUser.username = req.body.username
      currentUser.emailAddress = req.body.emailAddress

      console.log("currentUser updated: ", currentUser)
      User.findByIdAndUpdate(req.body.id, currentUser, {new: true})
      .then((currentUser) => {
        res.json({currentUser})
      })
      .catch(err => {
        console.log(err)
      })
  })
  .catch(err => {
      console.log(err)
  })
}

// exports.user_update_put = (req, res) => {
//   console.log("req.body", req.body)
//   User.findByIdAndUpdate(req.body.id, req.body, {new: true})
//   .then((user) => {
//       console.log(user)
//       res.json({user})
//   })
//   .catch(err => {
//       console.log(err)
//   })
// }

//  CHANGE PASSWORD

exports.auth_password_put = (req, res, next) => {
  let currentUser = {}
  console.log('req.body: ', req.body)
  User.findById(req.body.id)
  .then(user => {
    currentUser = user

    if (!bcrypt.compareSync(req.body.currentPassword, currentUser.password)) {
        res.status(401).send("Current password is incorrect")
    } else if (req.body.newPassword !== req.body.newPasswordConfirm) {
        res.status(401).send("New password and password confirmation don't match!")
    } else {
        let hashedPassword = bcrypt.hashSync(req.body.newPassword, salt);
        currentUser.password = hashedPassword;
        User.findByIdAndUpdate(req.body.id, currentUser)
        .then(() => {
          res.status(200).send("Your password has been updated");
        })
        .catch((err) => {
            console.log(err);
            res.status(400).send("Sorry there was an error");
        })
    }

  })
  .catch(error => {
    console.log(error);
    res.status(400).body("Sorry there was an error");
  })

};