const multer = require('multer')
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const path = require('path')

const {
    CLOUDINARY_HOST,
    CLOUDINARY_APY_KEY,
    CLOUDINARY_API_SECRET,
} = process.env;

cloudinary.config({
    cloud_name: CLOUDINARY_HOST,
    api_key: CLOUDINARY_APY_KEY,
    api_secret: CLOUDINARY_API_SECRET,
});

const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'triptips',
        format: async () => "png",
        public_id: (req, file) => req.body.username + uniqueSuffix + path.extname(file.originalname)
    },
});

const parser = multer({storage: storage})

module.exports = parser;