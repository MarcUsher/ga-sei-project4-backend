const router = require('express').Router();

// MULTER IMAGE UPLOAD FUNCTIONALITY

// Require MULTER for image upload
const multer = require('multer')
let path = require('path')

// Profile Image File Storage & File naming 
// (NB. This may need to be changed to back-end location for deployment as these won't be linked together anymore)

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./../triptips-FE/public/img/profileUploads")
    // callback(null, "../images/profileImages")
  }, 
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  }
})

// Full Multer Upload Info & filetype check
const upload = multer({ storage: storage });



const authCtrl = require("../controllers/auth");

// router.post("/auth/signup", upload.single('profileImage'), authCtrl.auth_signup_post);
router.post("/auth/signup", authCtrl.auth_signup_post);
router.post("/auth/signin", authCtrl.auth_signin_post);
router.get("/auth/logout", authCtrl.auth_logout_get);
router.get("/auth/profile", authCtrl.auth_profile_get);
router.put("/auth/profile/update", authCtrl.user_update_put);
router.put("/auth/profile/pwdchange", authCtrl.auth_password_put);

module.exports = router;