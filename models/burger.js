const orm = require("orm");


var orm = require("../config/orm.js");

var burger = {

    burgerSelect: function (cb) {
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },
    burgerInsert: function (userInput, cb) {
        orm.insertOne("burgers", "burger_name", userInput, (res) => {
            cb(res);
        });
    },
    eatUpdate: function (eatStatus, targetId, cb) {
        orm.updateOne("burgers", "devoured", eatStatus, "id", targetId, (res) => {
            cb(res);
        });
    }

};

module.exports = burger;