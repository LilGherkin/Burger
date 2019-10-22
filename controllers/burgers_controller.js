const burger = require("../models/burger.js");
const express = require("express");
const router = express.Router();

router.get('/', function(req,res){
    burger.burgerSelect((data), function(){
        var HoldOverObject = {
            burgers: data
        };
        console.log(HoldOverObject);
        res.render("index", HoldOverObject);
    });
});

router.post("/api/newburger", (req, res), function(){
    burger.burgerInsert(req.body.burger_name, (result), function(){
        res.json({id: result.insertId});
    });
});

router.put("/api/isdevoured/:id", (req, res), function() {
    burger.eaten(req.body.devoured, req.params.id, (result), function(){
        if(result.changedRows===0){
            return res.status(404).end();
        };
    }
);

module.exports = router;
