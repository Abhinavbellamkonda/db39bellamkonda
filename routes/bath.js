var express = require("express");
const bath_controlers= require('../controllers/bath'); 
var router = express.Router();

/* GET home page. */
router.get('/', bath_controlers.bath_view_all_Page ); 
router.get("/", function (req, res, next) {
  res.render("bath", { title: "Search Results for Bath_essentials" });
});

module.exports = router;