import database from '../config/database.js';

//create new user
export const register_new_user = (data, result) => {
    database.query("INSERT INTO users SET?"), [data], (err,results) =>{
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    };
};