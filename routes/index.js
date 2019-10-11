const express = require("express");
const router = express.Router();

const homeController = require("../controller/home_controller");

// calling home page from here
router.get("/", homeController.home);
// calling adding todo from here
router.post("/add", homeController.add);
// calling delete todo from here
router.post("/delete", homeController.delete);

module.exports = router;
