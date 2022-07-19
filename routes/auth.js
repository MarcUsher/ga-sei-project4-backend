const router = require('express').Router();

const authCtrl = require("../controllers/auth");

router.post("/auth/signup", authCtrl.auth_signup_post);

router.post("/auth/signin", authCtrl.auth_signin_post);

router.get("/auth/logout", authCtrl.auth_logout_get);

router.get("/auth/profile", authCtrl.auth_profile_get);

router.put("/auth/profile/update", authCtrl.user_update_put);

router.put("/auth/profile/pwdchange", authCtrl.auth_password_put);

module.exports = router;