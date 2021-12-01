var express = require("express");
const bath_controlers = require('../controllers/bath');
var router = express.Router();

// A little function to check if we have an authorized user and continue on 
// or 
// redirect to login. 
// /* GET home page. */
// router.get('/', bath_controlers.bath_view_all_Page);
// router.get("/", function (req, res, next) {
//   res.render("bath", { title: "Search Results for Bath_essentials" });
// });
const secured = (req, res, next) => {
  if (req.user) {
    return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect("/login");
}

/* GET detail bath page */
router.get('/detail', bath_controlers.bath_view_one_Page);

/* GET create bath page */
router.get('/create', secured, bath_controlers.bath_create_Page);

/* GET create update page */
router.get('/update', secured, bath_controlers.bath_update_Page);

/* GET create bath page */
router.get('/delete', bath_controlers.bath_delete_Page);

module.exports = router;