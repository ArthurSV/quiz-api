var express = require("express");
var router = express.Router();

const authControl = require("../controler/authenticate"); 

router.post("/", authControl.auth);

module.exports = router;
