import database from '../config/database.js';

// get all product prices
export const Getdata = (result) => {
    database.query("SELECT * FROM timber", (err, results) => {
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
    database.query("SELECT * FROM timber WHERE id = 1", [id], (err, results) =>{
        if (err) {
            console.log(err);
            console.error('Error executing query:', err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });
};



