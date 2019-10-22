var connection = require("./connection.js");

var orm = {
    CtrlA: (tableInput, cb) => {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    AddOne: (tableInput, tableVal, userVal, cb) => {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [tableInput, tableVal, userVal], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    ChangeOne: (tableInput, colToUpdate, userVal, colToSearch,idSearch, cb) => {
        var queryString = "UPDATE ?? SET ??=? WHERE ??=?";
        connection.query(queryString, [tableInput, colToUpdate, userVal, colToSearch, idSearch], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;