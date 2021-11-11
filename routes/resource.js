var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var bath_controller = require('../controllers/bath'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/resource', api_controller.api); 
 
/// bath ROUTES /// 
 
// POST request for creating a bath.  
router.post('/resource/bath', bath_controller.bath_create_post); 
 
// DELETE request to delete bath. 
router.delete('/resource/bath/:id', bath_controller.bath_delete); 
 
// PUT request to update bath. 
router.put('/resource/bath/:id', 
bath_controller.bath_update_put); 
 
// GET request for one bath. 
router.get('/resource/bath/:id', bath_controller.bath_detail); 
 
// GET request for list of all bath items. 
router.get('/resource/bath', bath_controller.bath_list); 
 
module.exports = router; 