import database from '../config/database';

// get all product prices
export const getallpricedata = (result) => {
    database.query("SELECT * FROM koki.Prices", (err, results) => {
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
    database.query("SELECT * FROMS koki.dizozols WHERE price_id = ?", [id], (err, results) =>{
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });
};



