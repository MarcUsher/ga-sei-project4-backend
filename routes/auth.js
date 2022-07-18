const router = require('express').Router();

const authCtrl = require("../controllers/auth");

router.post("/auth/signup", authCtrl.auth_signup_post);

router.post("/auth/signin", authCtrl.auth_signin_post);

router.get("/auth/logout", authCtrl.auth_logout_get);

router.get("/auth/profile", authCtrl.auth_profile_get);

module.exports = router;