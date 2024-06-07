const express = require("express");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileExtension = path.extname(file.originalname);
    cb(null, file.fieldname + "_" + uniqueSuffix + fileExtension);
  },
});

const upload = multer({ storage: storage });

const UserController = require("../controllers/user.controller");

const router = express.Router();

router.post(
  "/register",
  upload.single("profile_image"),
  UserController.register
);
router.post("/login", UserController.login);
router.get("/logout", UserController.logout);
router.get("/getAll", UserController.getAllUsers);
router.delete("/:id", UserController.deleteUser);
router.get("/authorization", UserController.getUserRole);
router.get("/getUsersCount", UserController.getUsersCount);

module.exports = router;
