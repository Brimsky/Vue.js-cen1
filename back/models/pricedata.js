import database from '../config/database.js';

// get all product prices
export const getallpricedata = (result) => {
    database.query("SELECT * FROM timber.timberprices", (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
};

//get one product price
export const getdizozols = (id,result) => {
    database.query("SELECT * FROMS timber.timberprices WHERE TimberID = ?", [id], (err, results) =>{
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });
};



