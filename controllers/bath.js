var bath = require('../models/bath');

// // List of all baths 
exports.bath_list = function (req, res) {
    res.send('NOT IMPLEMENTED: bath list');
};

// for a specific bath. 
exports.bath_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: bath detail: ' + req.params.id);
};

// Handle bath create on POST. 
// exports.bath_create_post = function (req, res) {
//     res.send('NOT IMPLEMENTED: bath create POST');
// };

// Handle bath delete form on DELETE. 
exports.bath_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: bath delete DELETE ' + req.params.id);
};

// Handle bath update form on PUT. 
exports.bath_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: bath update PUT' + req.params.id);
};

// List of all bath 
exports.bath_list = async function (req, res) {
    try {
        thebaths = await bath.find();
        res.send(thebaths);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS 
// Handle a show all view 
exports.bath_view_all_Page = async function (req, res) {
    try {
        thebaths = await bath.find();
        res.render('bath', { title: 'bath Search Results', results: thebaths });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle bath create on POST. 
exports.bath_create_post = async function (req, res) {
    console.log(req.body)
    let document = new bath();
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"bath_type":"goat", "bath_towel_type":12, "cost":"large"} 
    document.bath_type = req.body.bath_type;
    document.bath_towel_type = req.body.bath_towel_type;
    document.bath_towel_type = req.body.bath_towel_type;
    try {
        let result = await document.save();
        console.log(result)
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific bath. 
exports.bath_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await bath.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle bath update form on PUT. 
exports.bath_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await bath.findById(req.params.id)
        // Do updates of properties 
        if (req.body.bath_type)
            toUpdate.bath_type = req.body.bath_type;
        if (req.body.bath_towel_type) toUpdate.bath_towel_type = req.body.bath_towel_type;
        if (req.body.cost) toUpdate.cost = req.body.cost;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`);
    }
};

// Handle bath delete on DELETE. 
exports.bath_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await bath.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle a show one view with id specified by query 
exports.bath_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await bath.findById(req.query.id)
        res.render('bathdetail',
            { title: 'bath Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a bath. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.bath_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('bathcreate', { title: 'bath Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a bath. 
// query provides the id 
exports.bath_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await bath.findById(req.query.id)
        res.render('bathupdate', { title: 'bath Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query 
exports.bath_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await bath.findById(req.query.id)
        res.render('bathdelete', {
            title: 'bath Delete', toShow:
                result
        });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};