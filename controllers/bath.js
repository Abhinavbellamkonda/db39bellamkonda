var bath = require('../models/bath'); 
 
// List of all baths 
exports.bath_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: bath list'); 
}; 
 
// for a specific bath. 
exports.bath_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: bath detail: ' + req.params.id); 
}; 
 
// Handle bath create on POST. 
exports.bath_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: bath create POST'); 
}; 
 
// Handle bath delete form on DELETE. 
exports.bath_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: bath delete DELETE ' + req.params.id); 
}; 
 
// Handle bath update form on PUT. 
exports.bath_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: bath update PUT' + req.params.id); 
}; 

// List of all bath 
exports.bath_list = async function(req, res) { 
    try{ 
        thebaths = await bath.find(); 
        res.send(thebaths); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// VIEWS 
// Handle a show all view 
exports.bath_view_all_Page = async function(req, res) { 
    try{ 
        thebaths = await bath.find(); 
        res.render('bath', { title: 'bath Search Results', results: thebaths }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// Handle bath create on POST. 
exports.bath_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new bath(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"bath_type":"goat", "cost":12, "size":"large"} 
    document.bath_type = req.body.bath_type; 
    document.cost = req.body.cost; 
    document.bath_towel_type = req.body.bath_towel_type; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 