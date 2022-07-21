const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
   
    firstName: {
        type: String,
        required: true,
        minlength: [3, "First name must be more than 3 characters."],
        maxlength: [99, "First name is too long"]
    },
    lastName: {
        type: String,
        required: true,
        minlength: [3, "Last name must be more than 3 characters."],
        maxlength: [99, "Last name is too long"]
    },
    username: {
        type: String,
        required: true,
        minlength: [3, "Username must be more than 3 characters."],
        maxlength: [30, "Username is too long"]
    },
    emailAddress: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: [6, "Password must be longer than 6 characters"]
    },
    profileImage: {
        type: String,
    },
    // country: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Country'
    // }],
}, {
    timestamps: true
});

userSchema.methods.verifyPassword = function(password) {
    console.log("Plain Text" + password);
    console.log("encrypted password" + this.password);
    return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;