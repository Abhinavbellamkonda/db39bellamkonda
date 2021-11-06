var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("bath", { title: "Search Results for Bath_essentials" });
});

module.exports = router;